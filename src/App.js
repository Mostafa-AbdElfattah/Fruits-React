import React, { Component } from "react";
import "./App.css";
import { ViewFruits } from "./Components/ViewFruits/ViewFruits.component";
import { GetCount } from "./Components/GetCount/GetCount.component";
import { AddNewFruit } from "./Components/AddNewFruit/AddNewFruit.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      fruits: [
        { id: 2, name: "Oranges" },
        { id: 5, name: "Apples" },
        { id: 7, name: "Cherries" },
        { id: 4, name: "Mangos" },
      ],
      getCount: "",
      newFruitName:"" ,
      newFruitCount : null,
      newFruit: [],
    };
  }

  countSearch = (event) => {
    this.setState({ getCount: event.target.value });
  };

  addFruitName = (event) => {
    this.setState({ newFruitName: { name: event.target.value } });
  };

  addFruitID = (event) => {
    this.setState({ newFruitCount: { id: event.target.value } });
  };

  newFruit =()=>{
    this.setState({newFruit:{ ...this.state.newFruitName , ...this.state.newFruitCount}},()=>{this.setState({fruits:[...this.state.fruits,this.state.newFruit]})})
  }




  render() {
    const { fruits, getCount } = this.state;
    const filterFruits = fruits.filter((fruit) =>
      fruit.name.includes(getCount)
    );

    return (
      <div className="maxContainer">
        <ViewFruits fruits={this.state.fruits} />
        <GetCount countSearch={this.countSearch} searchFruit={filterFruits} />
        <AddNewFruit
          addId={this.addFruitID}
          addName={this.addFruitName}
          newFruit={this.newFruit}
          fruits={this.state.fruits}
        />
      </div>
    );
  }
}

export default App;
