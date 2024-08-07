import { useRef, useCallback } from 'react';

const useInfiniteScroll = (callback: () => void, dependencies: any[]) => {
  const observer = useRef<IntersectionObserver | null>(null);

  const lastElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          callback();
        }
      });
      if (node) observer.current.observe(node);
    },
    dependencies
  );

  return lastElementRef;
};

export default useInfiniteScroll;
