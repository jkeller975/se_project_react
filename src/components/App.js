import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main
          onEditAvatarClick={handleEditAvatarClick}
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>
      <PopupWithForm
        title="Edit Profile"
        name="edit-profile"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          id="profile-name"
          name="name"
          className="popup__input popup__input_type_name"
          placeholder="Name"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="popup__error" id="profile-name-error">
          Placeholder
        </span>

        <input
          type="text"
          id="profile-description"
          name="description"
          minLength="2"
          maxLength="200"
          className="popup__input popup__input_type_description"
          placeholder="About me"
          required
        />
        <span className="popup__error" id="profile-description-error">
          Placeholder
        </span>
      </PopupWithForm>

      <PopupWithForm
        name="add-card"
        title="New Place"
        buttonText="Create"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          id="place-name"
          maxLength="30"
          minLength="2"
          name="title"
          className="popup__input popup__input_type_title"
          placeholder="Title"
          required
        />
        <span className="popup__error" id="place-name-error">
          Placeholder
        </span>
        <input
          type="url"
          id="place-link"
          name="url"
          className="popup__input popup__input_type_link"
          placeholder="Image URL"
          required
        />
        <span className="popup__error" id="place-link-error">
          Placeholder
        </span>
      </PopupWithForm>

      <PopupWithForm
        name="delete-confirm-popup"
        title="Are you sure?"
        buttonText="Yes"
      />

      <PopupWithForm
        title="Change profile picture"
        name="edit-avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="url"
          id="avatar-link"
          name="url"
          className="popup__input popup__input_type_link"
          placeholder="Image URL"
          required
        />
        <span className="popup__error" id="avatar-link-error">
          Placeholder
        </span>
      </PopupWithForm>
      <ImagePopup
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
