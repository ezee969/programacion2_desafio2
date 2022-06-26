import './first_section.css';
import bgImg from '../../../utils/imgs/home-bg.png';

const FirstSection = () => {
  const text =
    'Este es un producto increible, no se que haces viendo que lo puedes tener';

  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
      }}
      id='first-section-cont'
    >
      <div className='p-4 m-auto border rounded-lg shadow-md border-slate-300 bg-gray-50'>
        <h2 id='first-section-text'>{text}</h2>
      </div>
    </div>
  );
};

export default FirstSection;
