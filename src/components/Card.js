import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardName,
      cardRare,
      cardDescription,
      cardTrunfo,
      button,
    } = this.props;
    return (
      <div>
        <h1 data-testid="name-card">{cardName}</h1>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">{cardDescription}</p>
        <p data-testid="attr1-card">{cardAttr1}</p>
        <p data-testid="attr2-card">{cardAttr2}</p>
        <p data-testid="attr3-card">{cardAttr3}</p>
        <p data-testid="rare-card">{cardRare}</p>
        { cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : '' }
        { button }
      </div>
    );
  }
}

Card.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  button: PropTypes.element.isRequired,
};

export default Card;
