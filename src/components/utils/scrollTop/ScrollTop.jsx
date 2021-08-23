import React, { useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use';
import { ScrollTopStyled } from './ScrollTop.styles';

function ScrollTop() {
  const { y } = useWindowScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (y > 500) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [y]);

  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

  if (!visible) {
    return false;
  }

  return (
    <ScrollTopStyled>
      <button onClick={scrollToTop} className="scroll-top-btn">
        &#11014;
      </button>
    </ScrollTopStyled>
  );
}

export default ScrollTop;
