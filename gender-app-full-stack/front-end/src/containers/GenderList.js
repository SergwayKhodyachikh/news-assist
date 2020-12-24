import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as genderListActions from '../store/actions/genderListActions';

import GenderListItem from '../components/GenderList/GenderListItem/GenderListItem';
import GlobalButtons from '../components/GenderList/GlobalButtons';

class GenderList extends Component {
  render() {
    const {
      genderListData,
      loading,
      getFailure,
      nameChange,
      getGender,
      addPerson
    } = this.props;
    const GenderList = genderListData.map(input => (
      <GenderListItem
        key={input.id}
        id={input.id}
        name={input.name}
        gender={input.gender}
        nameChange={nameChange}
        getGender={getGender}
        loading={loading}
        getFailure={getFailure}
      />
    ));

    return (
      <div className="jumbotron d-flex flex-column" style={{ paddingTop: 0 }}>
        <GlobalButtons addPerson={addPerson} getGender={getGender} genderListData={genderListData} />
        <hr />
        <div className="form-group">{GenderList}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  genderListData: state.genderList.genderListData,
  loading: state.genderList.loading,
  getFailure: state.genderList.genderListData.getFailure
});

const mapDispatchToProps = {
  nameChange: genderListActions.nameChange,
  getGender: genderListActions.getGender,
  addPerson: genderListActions.addPerson
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenderList);
