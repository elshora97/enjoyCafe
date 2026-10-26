import { getImageProps, type ImageProps } from "next/image";
import { preload as preloadResource } from "react-dom";

type PhotoProps = Omit<ImageProps, "placeholder" | "onLoad" | "onError"> & {
  /** Accepted for API parity with next/image; ignored (getImageProps can't remove a placeholder). */
  placeholder?: string;
};

/**
 * Optimized image without client-side JavaScript.
 *
 * `next/image` is a Client Component, so every instance is hydrated in the
 * browser. `getImageProps` produces the exact same optimized <img>
 * (AVIF/WebP, responsive srcset, lazy loading, intrinsic size) as plain HTML,
 * which keeps main-thread work — and Total Blocking Time — low.
 *
 * Give the wrapper a background colour to stand in for the blur placeholder.
 */
export function Photo({ placeholder: _placeholder, preload, ...rest }: PhotoProps) {
  void _placeholder;
  const { props } = getImageProps({
    ...rest,
    loading: preload ? "eager" : rest.loading,
    fetchPriority: preload ? "high" : rest.fetchPriority,
  });

  if (preload && props.srcSet) {
    // Same effect as next/image `preload`: a <link rel=preload> in <head>.
    preloadResource(props.src, {
      as: "image",
      imageSrcSet: props.srcSet,
      imageSizes: props.sizes,
      fetchPriority: "high",
    });
  }

  // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
  return <img {...props} />;
}
