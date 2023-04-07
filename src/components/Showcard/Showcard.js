import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import './Showcard.css';
import { Modal } from "react-bootstrap";
import { GrClose } from "react-icons/gr";
import { GiRoundStar } from "react-icons/gi";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

const Showcard = ({ showdata }) => {
   const [show, setShow] = useState(false);

   const handleShow = (e) => setShow(true);
   const handleClose = (e)=> setShow(false);

   const ratingValue = showdata.rating.average / 2;

  return (
    <>
      <div className="card-container">
        <Card onClick={(e) => handleShow(e.target.value)}>
          <Card.Img src={showdata.image.original} alt={showdata.id} />
          <Card.Body>
            <span>
              <strong>{showdata.name}</strong>
            </span>
            <span className="rating">
              <GiRoundStar />
              <strong>{(showdata.rating.average / 2).toFixed(1)}</strong>
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
            <GrClose
              onClick={() => handleClose(true)}
              className="modal-close"
            />
            <div className="attribute-list">
              <ul>
                <li>
                  <strong>Premiered On</strong>
                  <p>{showdata.premiered}</p>
                </li>
                <li>
                  <strong>Rating</strong>
                  <p>
                    <Rating
                      name="movie-rating"
                      value={ratingValue}
                      readOnly
                      emptyIcon={
                        <StarIcon
                          style={{ opacity: 0.55 }}
                          fontSize="inherit"
                        />
                      }
                    />
                  </p>
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