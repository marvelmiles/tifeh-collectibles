import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * On navigation, jump to the top of the page (unless the URL has a hash
 * anchor, in which case let the browser handle the in-page jump).
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, hash]);

  return null;
}
