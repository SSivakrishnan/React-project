import React, { useState } from "react";
//import Popup from './popup';
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
const CharacterList = ({ currentCharacters }) => {
  // const Clicking=(character)=>{
  //      return(<div><Popup character={character}/></div>)
  //  }
  var [modal, setModal] = useState(false);
  var [modalData, setModalData] = useState([]);
  const toggle = (character) => {
    setModal(!modal);
    setModalData(character);
  };
  //     const callmodal=(character)=>{
  //       console.log(character.name);

  //
  //     }

  return (
    <div>
      <ul className="list-group mb-4">
        {currentCharacters.map((character) => (
          <li className="list-group-item" key={character.char_id}>
            <button
              onClick={() => {
                toggle(character);
              }}
              href="!#"
              className="btn btn-light btn-block"
            >
              <div className="row">
                <div className="col-md-3 text-primary">{character.name}</div>
                <div className="col-md-5 text-primary">
                  {character.occupation}
                </div>
                <div className="col-md-2 text-primary">
                  {character.birthday}
                </div>
                <div className="col-md-2 text-primary">{character.status}</div>
              </div>
            </button>
          </li>
        ))}
      </ul>

      <Modal isOpen={modal}>
        <ModalHeader>Details</ModalHeader>
        <ModalBody>
          <img
            src={modalData.img}
            className="col-md-4 rounded float-center"
            alt="imagess"
          />
          <h4>
            <span className="text-primary">Name:</span>
            <em>{modalData.name}</em>
          </h4>
          <h4>
            <span className="text-primary">Date of birth:</span>{" "}
            <em>{modalData.birthday}</em>
          </h4>
          <h4>
            <span className="text-primary">Occupation:</span>{" "}
            <em>{modalData.occupation}</em>
          </h4>
          <h4>
            <span className="text-primary">Status:</span>
            <em>{modalData.occupation}</em>
          </h4>
          <h4>
            <span className="text-primary">Nickname: </span>
            <em>{modalData.nickname}</em>
          </h4>
          <h4>
            <span className="text-primary">Potray: </span>
            <em>{modalData.potrayed}-</em>
          </h4>
          <h4>
            <span className="text-primary">Sessions apperas: </span>
            <em>{modalData.appearance}</em>
          </h4>
          <h4>
            <span className="text-primary">Quotes: </span>
            <em>{modalData.category}</em>
          </h4>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={toggle}>
            {" "}
            close
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CharacterList;
