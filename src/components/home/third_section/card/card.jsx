import './card.css';

const AnimatedCard = (props) => {
  return (
    <div
      className={
        props.cardType === 'animated'
          ? 'card-cont animated-card-cont'
          : 'card-cont person-card-cont'
      }
    >
      <div
        className={
          props.cardType === 'animated'
            ? 'card-img-cont animated-card-img-cont'
            : 'card-img-cont'
        }
      >
        <img alt={props.alt} src={props.img} />
      </div>
      <h3 className={props.cardType === 'person' && 'h3-p-margin'}>
        {props.title}
      </h3>
      <p className={props.cardType === 'person' && 'h3-p-margin'}>
        Miles de productos hay en el mercado, pero nada como una caja con
        gatitos
      </p>
    </div>
  );
};

export default AnimatedCard;
