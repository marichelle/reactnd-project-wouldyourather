/*
Name
Answered Questions: #
Created Questions: #
Total Score: #
*/

import React, { Fragment } from 'react';

export default (props) => {
  const { position, user } = props;
  const { name, avatarURL, answered, created, score } = user;
  const trophyColor = position === 1 ? 'yellow' : 'inverted';

  return (
    <Fragment>
      <div className="four wide column"></div>
      <div className="eight wide column">
        <div className="ui segments">
          <div className="ui right aligned teal segment">
            <span style={{ float: 'left', fontWeight: 'bold' }}>{name}</span>
            <i className={`trophy icon ${trophyColor}`}></i>
          </div>
          <div className="ui horizontal segments">
            <div className="ui segment">
              <img
                src={avatarURL}
                alt="{`Avatar of ${name}`}"
                className="ui tiny centered circular image"
              />
            </div>
            <div className="ui segment">
              <table className="ui very basic table">
                <tbody>
                  <tr>
                    <td>Answered Questions:</td>
                    <td>{answered}</td>
                  </tr>
                  <tr>
                    <td>Created Questions:</td>
                    <td>{created}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="ui left aligned segment">
            <span>#{position}</span>
            <div className="ui bottom right attached large teal label">
              Score: {score}
            </div>
          </div>
        </div>
      </div>
      <div className="four wide column"></div>
    </Fragment>
  );
};
