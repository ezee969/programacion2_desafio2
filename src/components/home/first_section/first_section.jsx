import './first_section.css';

const FirstSection = () => {
  const text =
    'Este es un producto increible, no se que haces viendo que lo puedes tener';

  return (
    <div id='first-section-cont'>
      <h2 id='first-section-text'>{text}</h2>
    </div>
  );
};

export default FirstSection;
