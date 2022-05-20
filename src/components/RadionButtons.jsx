import React from "react";

class RadioButtons extends React.Component {


  render() {
    
    return (
      <form action="#" className="formRadioButton">
        <p>
          <label>
            <input
              onChange={(event) => this.props.changeRadioButton(event.target.name)}
              name="all"
              type="radio"
              checked={this.props.radioButton.all}
            />
            <span>All</span>
          </label>
        </p>
        <p>
          <label>
            <input onChange={(event) => this.props.changeRadioButton(event.target.name)}
              name="movie"
              type="radio"
              checked={this.props.radioButton.movie}
            />
            <span>Movies only</span>
          </label>
        </p>
        <p>
          <label>
            <input onChange={(event) => this.props.changeRadioButton(event.target.name)}
              className="with-gap"
              name="series"
              type="radio"
              checked={this.props.radioButton.series}
            />
            <span>Series only</span>
          </label>
        </p>
      </form>
    );
  }
}

export default RadioButtons;