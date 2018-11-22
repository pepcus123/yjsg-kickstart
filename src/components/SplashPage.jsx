import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Countries from './Countries';
import { showTestButtonAction, hideTestButtonAction, fetchTestAPIData } from './../actions';
import { selectors } from './../reducers/testReducer';
import { FormattedMessage } from 'react-intl';

const { getShowTestButton, getTestAPIResponse } = selectors;

class SplashPage extends Component {
  constructor(props) {
    super(props);

    this.renderTestButton = this.renderTestButton.bind(this);
    this.toggleTestButton = this.toggleTestButton.bind(this);
    this.onClickFetchTestButton = this.onClickFetchTestButton.bind(this);
  }

  renderTestButton() {
    if (this.props.showTestButton) {
      return (
        <div className="info">
          <button>Test Button</button>
        </div>
      );
    }
    return null;
  }

  toggleTestButton() {
    if (this.props.showTestButton) {
      this.props.hideTestButtonAction();
    } else {
      this.props.showTestButtonAction();
    }
  }

  onClickFetchTestButton() {
    this.props.fetchTestAPIData('https://jsonplaceholder.typicode.com/posts/1');
  }

  getTestAPIResp() {
    return (this.props.testAPIResponse) ? JSON.stringify(this.props.testAPIResponse) : 'API response here.';
  }

  render() {
    return (
      <div id="badge">
        <header>
          <div className="heart">
            <FormattedMessage id='heart.header' defaultMessage='Header'/>
            </div>
        </header>

        <section className="all">
          {<Countries />}
          <div className="info">
            <button onClick={this.toggleTestButton}>
              <FormattedMessage id='TOGGEL_TEST_BUTTON' defaultMessage='Toggle Test Button'/>
            </button>
            &nbsp;
            <button onClick={this.onClickFetchTestButton}>
              <FormattedMessage id='FETCH_TEST_DATA' defaultMessage='Fetch Test data'/>
             </button>
          </div>
          {this.renderTestButton()}
          <div className="JSON-section">
            <textarea value={this.getTestAPIResp()}></textarea>
          </div>
        </section>
      </div>
    );
  }
}

SplashPage.propTypes = {
  showTestButton: PropTypes.bool,
  testAPIResponse: PropTypes.string,
};

SplashPage.defaultProps = {
  showTestButton: false,
  testAPIResponse: '',
};

const mapStateToProps = (state, ownProps) => ({
  showTestButton: getShowTestButton(state),
  testAPIResponse: getTestAPIResponse(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  showTestButtonAction: () => dispatch(showTestButtonAction()),
  hideTestButtonAction: () => dispatch(hideTestButtonAction()),
  fetchTestAPIData: url => dispatch(fetchTestAPIData(url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SplashPage);
