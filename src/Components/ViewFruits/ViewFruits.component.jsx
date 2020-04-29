import "./ViewFruits.style.css";
import React, { Component } from "react";
import { ListOfOldFruits } from "../ListOfOldFruits/ListOfOldFruits.component";

export class ViewFruits extends Component {
  state = {
    showFruits: false,
  };

  render() {
    return (
      <div className="container">
        <h3 className="title">View Fruits List</h3>

        <div id="oldContainer">
          <div className="inputDiv viewClass">
            <button
              onClick={() =>
                this.setState({ showFruits: !this.state.showFruits })
              }
              className="genBtnStyle viewBtn"
            >
              {this.state.showFruits ? "Click To Hide" : "Click To View"}
            </button>
          </div>
        </div>

        <div id="newContainer">
          {this.state.showFruits && (
            <ListOfOldFruits fruits={this.props.fruits} />
          )}
        </div>
      </div>
    );
  }
}
