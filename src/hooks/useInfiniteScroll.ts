import { useCallback, useEffect, useRef, useState } from 'react';

interface Options {
  /** Total number of items available. */
  total: number;
  /** How many to show initially. */
  initial?: number;
  /** How many to add each time the sentinel is reached. */
  step?: number;
}

/**
 * Progressive disclosure for long lists. Returns the current visible count,
 * a ref to attach to a sentinel element, and whether more remain.
 * Resets to `initial` whenever `total` changes (e.g. when a filter is applied).
 */
export function useInfiniteScroll({ total, initial = 9, step = 6 }: Options) {
  const [count, setCount] = useState(Math.min(initial, total));
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  // Reset when the underlying dataset size changes (filtering).
  useEffect(() => {
    setCount(Math.min(initial, total));
  }, [total, initial]);

  const hasMore = count < total;

  const loadMore = useCallback(() => {
    setCount((c) => Math.min(c + step, total));
  }, [step, total]);

  useEffect(() => {
    const node = sentinelRef.current;
    if (!node || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) loadMore();
      },
      { rootMargin: '320px 0px' },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [hasMore, loadMore]);

  return { count, sentinelRef, hasMore, loadMore } as const;
}
