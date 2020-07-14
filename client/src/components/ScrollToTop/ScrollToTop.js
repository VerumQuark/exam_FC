import React, {useState} from 'react';
import Icon from '@mdi/react'
import { mdiArrowUpCircle } from '@mdi/js'
import styles from './ScrollToTop.module.sass'


const ScrollToTop = () =>{

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 150){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 150){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
    <div className={styles.scroll} onClick={scrollTop} style={{ opacity: showScroll ? '0.5' : '0'}}>
      <Icon path={mdiArrowUpCircle}
      size={1}
      color="white"/>
    </div>
  );
}

export default ScrollToTop;