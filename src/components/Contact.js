import React, { Component } from 'react';
import propTypes from 'prop-types';

import { Consumer } from '../context';

class Contact extends Component {
  state = {
    showContactInfo: false,
  };
  // constructor() {
  //   super();
  //   this.state = {
  //     patka: 1,
  //   };
  //   this.onShowClick = this.onShowClick.bind(this);
  // }

  static propTypes = {
    contact: propTypes.object.isRequired,
  };

  onShowClick = () => {
    this.setState({
      showContactInfo: !this.state.showContactInfo,
    });
  };

  onDeleteClick = (id, dispatch) => () => {
    dispatch({ type: 'DELETE_CONTACT', payload: id });
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{' '}
                <i
                  onClick={this.onShowClick}
                  className="fas fa-sort-down"
                  style={{ cursor: 'pointer' }}
                />
                <i
                  onClick={this.onDeleteClick(id, dispatch)}
                  className="fas fa-times"
                  style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                />
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">{email}</li>
                  <li className="list-group-item">{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contact;
