import React, { Component } from 'react';
import { connect } from 'react-redux';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';
import { saveValues } from '../../actions/';

export class SurveyNew extends Component {
  componentWillUnmount() {
    this.props.saveValues({ title: '', subject: '', body: '', recipients: '' });
  }
  renderContent() {
    if (this.state.showFormReview)
      return (
        <SurveyFormReview
          formValues={this.props.initialValues}
          saveValues={this.props.saveValues}
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    return (
      <SurveyForm
        initialValues={this.props.initialValues}
        onSurveySubmit={() => this.setState({ showFormReview: true })}
        saveValues={this.props.saveValues}
      />
    );
  }

  state = {
    showFormReview: false
  };

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

const mapStateToProps = state => ({
  initialValues: state.form
});

const mapDispatchToProps = {
  saveValues
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SurveyNew);
