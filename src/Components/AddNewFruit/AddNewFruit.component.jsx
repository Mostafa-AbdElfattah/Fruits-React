import "./AddNewFruit.style.css";
import React, { Component } from "react";
import { NewFruitList } from "../NewFruitList/NewFruitList.component";

export class AddNewFruit extends Component {
  state = {
    showFruits: false,
  };

  render() {
    return (
      <div className="container">
        <h3 className="title">Add New Fruit</h3>

        <div id="oldContainer">
          <div className="inputDiv">
            <div className="elemnt">
              <input
                type="text"
                className="fruitInput"
                placeholder="Enter Fruit"
                onChange={this.props.addName}
              />
            </div>
            <div className="elemnt">
              <input
                type="text"
                className="fruitInput"
                placeholder="Enter Count"
                onChange={this.props.addId}
              />
            </div>

            <button
              onClick={() => {
                this.setState({ showFruits: true });
                this.props.newFruit();
              }}
              className="genBtnStyle"
            >
              Add
            </button>
          </div>
        </div>

        <div id="newContainerAdd">
          {this.state.showFruits && <NewFruitList fruits={this.props.fruits} />}
        </div>
      </div>
    );
  }
}
