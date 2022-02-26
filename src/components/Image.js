import gsap from 'gsap';
import { useEffect } from 'react';

function Image(props) {
  useEffect(() => {
    window.addEventListener('keyup', keyListener);
    window.addEventListener(' DOMMouseScroll', scrollListener);

    return () => {
      window.removeEventListener('keyup', keyListener);
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  function keyListener(e) {
    e.key === 'ArrowLeft' && toLeft();
    e.key === 'ArrowRight' && toRight();
  }

  function scrollListener(e) {
    console.log(e);
    console.log('nega');
  }

  function toLeft() {
    gsap.from('img', {
      duration: 1,
      width: '10%',
      float: 'right'
    });

    gsap.to('img', {
      duration: 1,
      width: '100%'
    });
    const func = props.toggle;
    func();
  }

  function toRight() {
    gsap.from('img', {
      duration: 1,
      width: '10%',
      float: 'left'
    });

    gsap.to('img', {
      duration: 1,
      width: '100%'
    });
    const func = props.toggle;
    func();
  }

  return (
    <div className="image__container">
      <div className="hero">
        <img src={props.info.img} alt="student" />

        <div id="switch-area">
          <span className="pre" onClick={toLeft}></span>
          <span className="next" onClick={toRight}></span>
        </div>
      </div>
    </div>
  );
}

export default Image;
