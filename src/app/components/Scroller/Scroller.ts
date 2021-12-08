import { useEffect, useState } from 'react';

type ScrollerParam = (isHidden: boolean) => void;

function Scroller(callback: ScrollerParam) {
  const [, setScrollPosition] = useState(0);
  let previousScrollTop = 0;

  const MINIMUM_SCROLL = 80;

  function handleScroll() {
    const { scrollTop: currentScrollTop } = document.documentElement || document.body;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;
    const isHidden = isScrolledDown && isMinimumScrolled;

    setScrollPosition(previousPosition => {
      previousScrollTop = previousPosition;
      return currentScrollTop;
    });

    callback(isHidden);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () =>
      window.removeEventListener('scroll', handleScroll);
  }, []);
}

export default Scroller;