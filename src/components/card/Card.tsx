/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Component } from 'react';
import './card.styles.css';

type Props = {
  card: {
    id: number;
    title: string;
    image: string;
    description: string;
  };
};

class Card extends Component<Props, any> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <>
        <li className="card" key={this.props.card.id}>
          <div className="card_img-container">
            <img className="card_img" src={this.props.card.image} />
          </div>
          <div className="card_info-container">
            <h1 className="card_info-title">{this.props.card.title}</h1>
            <p className="card_info-comment">{this.props.card.description}</p>
          </div>
        </li>
      </>
    );
  }
}

export default Card;
