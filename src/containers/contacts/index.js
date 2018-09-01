/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GET_CONTACT_DATA } from './actions';

const mapStateToProps = state => ({
  contactData: state.contacts.contactData
});

const mapDispatchToProps = dispatch => ({
  onRequestContactData: () => dispatch({ type: GET_CONTACT_DATA })
});

class Contacts extends Component {
  componentDidMount() {
    const { onRequestContactData } = this.props;
    onRequestContactData();
  }

  render() {
    const { contactData } = this.props;

    return (
      <div className="card-inner contacts" id="contacts-card">
        <div className="card-wrap">
          <div className="content contacts">
            <div className="title">Get in Touch</div>

            <div className="row">
              <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
                <div className="info-list">
                  <ul>
                    <li>
                      <strong>Address . . . . .</strong> {contactData.address}
                    </li>
                    <li>
                      <strong>Email . . . . .</strong> {contactData.email}
                    </li>
                    <li>
                      <strong>Phone . . . . .</strong> {contactData.phone}
                    </li>
                    <li>
                      <strong>Freelance . . . . .</strong>
                      {contactData.freelance}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="clear" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Contacts.propTypes = {
  contactData: PropTypes.shape({
    address: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    freelance: PropTypes.string.isRequired
  }).isRequired,
  onRequestContactData: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts);
