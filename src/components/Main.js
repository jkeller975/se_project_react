import React from "react";
import Card from "./Card";
import { api } from "../utils/Api";

function Main({
  onEditAvatarClick,
  onEditProfileClick,
  onAddPlaceClick,
  onCardClick,
}) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cardList, setCardList] = React.useState([]);

  React.useEffect(() => {
    api
      .getInitialData()
      .then(([userInfo, cardList]) => {
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
        setCardList(cardList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__avatar">
          <div
            className="profile__image-edit"
            onClick={onEditAvatarClick}
          ></div>
          <img src={userAvatar} className="profile__image" alt="Profile Pic" />
        </div>
        <div className="profile__info">
          <div className="profile__name-edit">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="profile__edit-button"
              type="button"
              onClick={onEditProfileClick}
            ></button>
          </div>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button
          className="profile__add"
          type="button"
          onClick={onAddPlaceClick}
        ></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          {cardList.map((card) => (
            <Card card={card} onCardClick={onCardClick} key={card._id} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
