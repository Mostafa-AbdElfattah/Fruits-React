import "./GetCount.style.css";
import React, { Component } from "react";
import { CountNumber } from "../CountNumber/CountNumber.component";

export class GetCount extends Component {
  state = {
    fruitCount: "",
    showCount: false,
  };

  countFunc =()=>{
    this.setState({ showCount: true });
    if (this.props.searchFruit[0] ){
      this.setState({ fruitCount: this.props.searchFruit[0].id })
    } else if (!this.props.searchFruit[0] ){ this.setState({ fruitCount: 'Error' })}
  }

  render() {
    return (
      <div className="container">
        <h3 className="title">Get Fruit Count</h3>

        <div id="oldContainer">
          <div className="inputDiv">
            <div className="elemnt">
              <input
                type="text"
                className="fruitInput"
                placeholder="Enter Fruit Name"
                onChange={this.props.countSearch}
              />
            </div>

            <button
              onClick={this.countFunc}
              className="genBtnStyle"
            >
              Get Count
            </button>
          </div>
        </div>

        <div id="newContainerCount">
          
          {this.state.showCount && (
            <CountNumber fruitCount={this.state.fruitCount} />
          )}
        </div>
      </div>
    );
  }
}
