import './third_section.css';
import cuteCloudImg from '../../../utils/imgs/b1.png';
import cutePlanetImg from '../../../utils/imgs/b2.png';
import hotImg from '../../../utils/imgs/b3.png';
import p1Img from '../../../utils/imgs/p1.png';
import p2Img from '../../../utils/imgs/p2.png';
import p3Img from '../../../utils/imgs/p3.png';
import p4Img from '../../../utils/imgs/p4.png';
import Card from './card/card';

const ThirdSection = () => {
  return (
    <main id='main-page-cont'>
      <div id='animated-cards-cont'>
        <Card
          cardType='animated'
          alt='cute cloud image'
          img={cuteCloudImg}
          title='Los mas suavecitos'
        />
        <Card
          cardType='animated'
          alt='cute planet image'
          img={cutePlanetImg}
          title='Lo mas increíble'
        />
        <Card
          cardType='animated'
          alt='hot image'
          img={hotImg}
          title='Lo mas confiable'
        />
      </div>
      <hr />
      <h1 id='menciones-title'>Menciones</h1>
      <div id='person-cards-cont'>
        <Card cardType='person' alt='smiling man' img={p1Img} title='Mario' />
        <Card cardType='person' alt='smiling woman' img={p2Img} title='Maria' />
        <Card cardType='person' alt='smiling woman' img={p3Img} title='Joe' />
        <Card
          cardType='person'
          alt='smiling woman'
          img={p4Img}
          title='Jamaica'
        />
      </div>
    </main>
  );
};

export default ThirdSection;
