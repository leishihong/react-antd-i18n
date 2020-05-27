import React, { Component } from 'react';
import { injectIntl } from 'react-intl';

class DemoClass extends Component {
  componentDidMount() {
    console.log(this.props.intl, '---');
  }
  render() {
    return <div>测试123</div>;
  }
}
export default injectIntl(DemoClass);
