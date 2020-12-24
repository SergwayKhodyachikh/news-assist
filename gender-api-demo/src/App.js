import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import GenderList from './components/GenderList/GenderList';

class App extends Component {
  state = {
    genderListData: [
      {
        id: 0,
        name: '',
        gender: ''
      }
    ]
  };

  onChangeHandler = (id, event) => {
    const updatedInput = {
      ...this.state.genderListData[id],
      name: event.target.value
    };
    const updatedGenderListData = [...this.state.genderListData];
    updatedGenderListData[id] = updatedInput;
    this.setState({ ...this.state, genderListData: updatedGenderListData });
  };

  getGenderHandler = id => {
    fetch(
      `https://gender-api.com/get?name=${
        this.state.genderListData[id].name
      }&key=EeUauFBzttPKRLquyM`
    )
      .then(response => response.json())
      .then(data => {
        const updatedInput = {
          ...this.state.genderListData[id],
          gender: data.gender
        };
        const updatedGenderListData = [...this.state.genderListData];
        updatedGenderListData[id] = updatedInput;
        return this.setState({
          ...this.state,
          genderListData: updatedGenderListData
        });
      });
  };

  addPersonHandler = () => {
    const newGenderListData = [...this.state.genderListData];
    newGenderListData.push({
      id: this.state.genderListData.length,
      name: '',
      gender: ''
    });

    this.setState({ ...this.state, genderListData: newGenderListData });
  };

  getAllGenders = () => {
    // const newGenderListData = [];
    // this.state.genderListData.forEach(dataUnit =>
    //   newGenderListData.push({ ...dataUnit })
    // );
    this.state.genderListData.map(input => this.getGenderHandler(input.id));
  };

  render() {
    return (
      <div className="App container mt-5">
        <Header
          addPersonHandler={this.addPersonHandler}
          getAllGenders={this.getAllGenders}
        />
        <GenderList
          genderListData={this.state.genderListData}
          getGenderHandler={this.getGenderHandler}
          onChangeHandler={this.onChangeHandler}
        />
      </div>
    );
  }
}

export default App;
