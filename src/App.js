import { useState } from 'react';
import Image from './components/Image';
import Quote from './components/Quote';

function App() {
  const data = [
    {
      img: `${require('./img/image-tanya.jpg')}`,
      quote:
        "I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future.",
      name: 'Tanya Sinclair',
      job: 'UX Engineer'
    },

    {
      img: `${require('./img/image-john.jpg')}`,
      quote:
        "If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into in incredible. I now feel so confident about starting up as a professional developer.",
      name: 'John Tarkpor',
      job: 'Junior Front-end Developer'
    }
  ];

  const [active, setActive] = useState(true);
  const info = data;

  // window.addEventListener('keydown', (e) => {
  //   console.log(e.key);
  // });

  function toggle() {
    setActive((prev) => !prev);
  }

  return (
    <main id="app">
      <Image info={active ? info[0] : info[1]} toggle={toggle} />
      <Quote info={active ? info[0] : info[1]} />
    </main>
  );
}

export default App;
