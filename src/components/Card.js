function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="card">
      <button
        type="button"
        aria-label="Delete"
        className="card__delete"
      ></button>
      <img
        className="card__item"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <div className="card__description">
        <h2 className="card__text">{card.name}</h2>
        <div className="card__like-container">
          <button className="card__like" type="button"></button>
          <p className="card__like-counter">0</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
