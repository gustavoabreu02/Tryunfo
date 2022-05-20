import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardDescription,
      isSaveButtonDisabled,
      cardName,
      cardRare,
      cardTrunfo,
      onInputChange,
      onSaveButtonClick,
      cardImage,
      hasTrunfo,
    } = this.props;
    return (
      <form>
        <label htmlFor="nome">
          Nome:
          <input
            name="cardName"
            id="nome"
            type="text"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="descrição">
          Descrição:
          <textarea
            name="cardDescription"
            id="descrição"
            type="text"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr01">
          Attr01:
          <input
            name="cardAttr1"
            id="attr01"
            type="number"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr02">
          Attr02:
          <input
            name="cardAttr2"
            id="attr02"
            type="number"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr03">
          Attr03:
          <input
            name="cardAttr3"
            id="attr03"
            type="number"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="imagem">
          Imagem:
          <input
            name="cardImage"
            id="imagem"
            type="text"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="raridade">
          Raridade:
          <select
            name="cardRare"
            id="raridade"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="superTrunfo">
          Super Trybe Trunfo:
          {hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p> : <input
            name="cardTrunfo"
            id="superTryunfo"
            type="checkbox"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />}
        </label>
        <button
          name="isSaveButtonDisabled"
          data-testid="save-button"
          type="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}
Form.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  isSaveButtonDisabled: PropTypes.bool,
  cardTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  cardImage: PropTypes.string.isRequired,
  hasTrunfo: PropTypes.bool,
};

Form.defaultProps = {
  isSaveButtonDisabled: true,
  hasTrunfo: false,
};

export default Form;
