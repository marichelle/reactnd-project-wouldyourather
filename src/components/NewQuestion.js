/*
Ask a Question

Would you rather...
<optionOne text box>
or
<optionTwo text box>
<submit button>
*/

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false,
  };

  handleChange = (e) => {
    const field = e.target.name;
    const text = e.target.value;

    this.setState((currState) => ({
      ...currState,
      [field]: text,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { optionOneText, optionTwoText } = this.state;

    // todo: add question to store
    console.log('New Question Option 1: ', optionOneText);
    console.log('New Question Option 2: ', optionTwoText);

    // reset state
    this.setState(() => ({
      optionOneText: '',
      optionTwoText: '',
      toHome: true,
    }));
  };

  render() {
    const { optionOneText, optionTwoText, toHome } = this.state;

    /* Redirect to root if submitted */
    if (toHome === true) {
      return <Redirect to="/" />;
    }

    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="ui raised very padded text container segments">
          <div className="ui segment">
            <h2>Create New Question</h2>
          </div>
          <div className="ui segment">
            <h4>Would you rather...</h4>
            <div className="field">
              <input
                type="text"
                name="optionOneText"
                placeholder="Enter Option One Text Here"
                onChange={this.handleChange}
                value={optionOneText}
              />
            </div>
            <div className="ui horizontal divider">OR</div>
            <div className="field">
              <input
                type="text"
                name="optionTwoText"
                placeholder="Enter Option Two Text Here"
                onChange={this.handleChange}
                value={optionTwoText}
              />
            </div>
            <button
              type="submit"
              className="ui fluid teal button"
              disabled={optionOneText === '' || optionTwoText === ''}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default NewQuestion;
