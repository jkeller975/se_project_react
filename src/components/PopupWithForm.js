import React from "react";

function PopupWithForm({
  title,
  name,
  isOpen,
  buttonText = "Save",
  onClose,
  children,
}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          className="popup__close"
          type="button"
          onClick={onClose}
        ></button>
        <h3 className="popup__title">{title}</h3>
        <form
          className="popup__form popup__form_type_profile"
          name={name}
          noValidate
        >
          {children}
          <button
            type="submit"
            className="button popup__button popup__button-profile"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;