import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TestComponent from './test.jsx';
import {GrowlerActions} from 'flash-notification-react-redux';

const mapStateToProps = state => ({growler: state.growler});
const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators(GrowlerActions, dispatch),
  };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class SidebarContainer extends React.Component {
  componentWillMount() {

  }
  render() {
    return <TestComponent {...this.props} />;
  }
}
