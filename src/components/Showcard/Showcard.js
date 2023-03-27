import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import './Showcard.css';
import { Modal } from "react-bootstrap";
import { GrClose } from "react-icons/gr";
import { GiRoundStar } from "react-icons/gi"

const Showcard = ({ showdata }) => {
   const [show, setShow] = useState(false);

   const handleShow = (e) => setShow(true);
   const handleClose = (e)=> setShow(false);

  return (
    <>
      <div className="card-container">
        <Card onClick={(e) => handleShow(e.target.value)}>
          <Card.Img src={showdata.image.original} alt={showdata.id} />
          <Card.Body>
            <span>
              <strong>{showdata.name}</strong>
            </span>
            <span className='rating'>
              <GiRoundStar />
              <strong>{showdata.rating.average}</strong>
            </span>
          </Card.Body>
        </Card>
      </div>
      <Modal size="lg" show={show} onHide={handleClose}>
        <div className="modal-container">
          <img
            src={showdata.image.original}
            alt={showdata.id}
            className="modal-image"
          />
          <div className="modal-attribute">
            <h2>{showdata.name}</h2>
            <GrClose onClick={() => handleClose(true)} />
            <div className="attribute-list">
              <ul>
                <li>
                  <strong>Premiered On</strong>
                  <p>{showdata.premiered}</p>
                </li>
                <li>
                  <strong>Rating</strong>
                  <p>{showdata.rating.average}</p>
                </li>
                <li>
                  <strong>Language</strong>
                  <p>{showdata.language}</p>
                </li>
                <li>
                  <strong>Duration</strong>
                  <p>{showdata.runtime}</p>
                </li>
                <li>
                  <strong>Genres</strong>
                  <p>{showdata.genres.join(", ")}</p>
                </li>
                <li>
                  <strong>Network</strong>
                  <p>{showdata.network.name}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p>{showdata.summary}</p>
      </Modal>
    </>
  );
};

export default Showcard