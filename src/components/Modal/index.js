import React from 'react';

const Modal= ({onClose, currentPhoto}) => {
    //destructure currentPhoto properties into constraints to assign values into modal
    const {name, category, description, index} = currentPhoto;

    return (
    <div className="modalBackdrop">
        <div className="modalContainer">
            <h3 className="modal-title">{name}</h3>
            <img src={require(`../../assets/large/${category}/${index}.jpg`)} alt="currentCategory" />
            <p>{description}</p>
            <button onClick={onClose} type="button">
                Close this modal
            </button>
        </div>
    </div>
    );
}

export default Modal;