import React, { Component } from 'react';

import {GrowlerContainer} from 'flash-notification-react-redux';
import GrowlerMessages from 'locales/growler.locale.js';

export class App extends Component {
  static propTypes = {
    children: React.PropTypes.any,
  }
  render() {
    return (
      <section>
        <GrowlerContainer messages={GrowlerMessages} showFor={3000} currentLocale="enUS" />
        {this.props.children}
      </section>
    );
  }
}
