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
      cardRare: '',
      cardTrunfo: false,
      cardImage: '',
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
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
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardDescription={ cardDescription }
          isSaveButtonDisabled="a"
          cardName={ cardName }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
          onSaveButtonClick="a"
          cardImage={ cardImage }
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
      </div>
    );
  }
}

export default App;
