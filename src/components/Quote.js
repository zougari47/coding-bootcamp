import gsap from 'gsap';

function Quote(props) {
  gsap.from('span, p', {
    duration: 1.5,
    opacity: 0
  });

  gsap.to('span, p', {
    duration: 1.5,
    opacity: 1
  });

  return (
    <div className="quote__container">
      <p id="quote">"{props.info.quote}"</p>
      <div className="info">
        <span id="name">{props.info.name}</span>
        <span id="job">{props.info.job}</span>
      </div>
    </div>
  );
}

export default Quote;
