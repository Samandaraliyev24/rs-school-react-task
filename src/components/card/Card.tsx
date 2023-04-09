/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import './card.styles.css';

type Props = {
  card: {
    _id: number;
    name: string;
    description: string;
    spouse?: string;
    wikiUrl?: string;
  };
  openModal: (card: any) => void;
};

function Card(props: Props) {
  return (
    <>
      <div className="main_card">
        <li className="card" key={props.card._id} onClick={() => props.openModal(props.card)}>
          <div className="card_info-container">
            <h1 className="card_info-title">Name: {props.card.name}</h1>
            <h6 className="card_info-title">Spuse: {props.card.spouse}</h6>
            <a href={props.card.wikiUrl} target="_blank" rel="noreferrer">
              Wiki link
            </a>
          </div>
        </li>
      </div>
    </>
  );
}

export default Card;
