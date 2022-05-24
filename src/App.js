import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardDescription: '',
      cardName: '',
      cardRare: 'normal',
      cardTrunfo: false,
      cardImage: '',
      isSaveButtonDisabled: true,
      hasTrunfo: false,
      cartasInfo: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.isSaveButtonDisabled = this.isSaveButtonDisabled.bind(this);
    this.saveBnt = this.saveBnt.bind(this);
    this.trunfo = this.trunfo.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => (
      this.isSaveButtonDisabled()
    ));
  }

  trunfo() {
    const { cardTrunfo } = this.state;
    if (cardTrunfo === true) {
      this.setState({
        hasTrunfo: true,
      });
    }
  }

  saveBnt() {
    const { cartasInfo } = this.state;
    cartasInfo.push(this.state);
    this.trunfo();
    this.setState({
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardDescription: '',
      cardName: '',
      cardRare: 'normal',
      cardTrunfo: false,
      cardImage: '',
      isSaveButtonDisabled: true,
    });
  }

  isSaveButtonDisabled() {
    const maximo = 210;
    const v = 90;
    const {
      cardDescription,
      cardName,
      cardRare,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3 } = this.state;
    const um = parseFloat(cardAttr1);
    const dois = parseFloat(cardAttr2);
    const três = parseFloat(cardAttr3);
    if (
      cardName.length >= 1
      && cardDescription.length >= 1
      && cardImage.length >= 1
      && cardRare.length >= 1
      && um + dois + três <= maximo
      && um <= v && dois <= v && três <= v
      && um >= 0 && dois >= 0 && três >= 0
    ) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  render() {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardDescription,
      cardName,
      cardRare,
      cardTrunfo,
      cardImage,
      isSaveButtonDisabled,
      hasTrunfo,
      cartasInfo,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardDescription={ cardDescription }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          cardName={ cardName }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.saveBnt }
          cardImage={ cardImage }
          hasTrunfo={ hasTrunfo }
        />
        <Card
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardName={ cardName }
          cardRare={ cardRare }
          cardDescription={ cardDescription }
          cardTrunfo={ cardTrunfo }
        />
        {cartasInfo.map((value, i) => (
          <Card
            key={ i }
            { ...value }
            button={
              <button
                name={ value.cardName }
                data-testid="delete-button"
                type="button"
                onClick={ (event) => {
                  const cards = cartasInfo.filter((card) => (
                    card.cardName !== event.target.name
                  ));
                  this.setState({ cartasInfo: [...cards] }, () => {
                    const verificaCartas = cartasInfo.every((card) => (
                      card.cardTrunfo === true
                    ));
                    if (verificaCartas || cartasInfo === []) {
                      this.setState({ hasTrunfo: false });
                    }
                  });
                } }
              >
                Excluir
              </button>
            }
          />
        ))}
      </div>
    );
  }
}

export default App;
