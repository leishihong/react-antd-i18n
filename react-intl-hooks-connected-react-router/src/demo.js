import React from 'react';
import { useIntl, injectIntl, FormattedMessage } from 'react-intl';
import { Button, Form, Input } from 'antd';

const DemoApp = (props) => {
  const { locale, messages, formatMessage } = useIntl();
  //   const {
  //     intl: { formatMessage },
  //   } = props;
  console.log(props.intl, useIntl());
  return (
    <div>
      <h1> {formatMessage({ id: 'welcome' })}</h1>
      <FormattedMessage id="eMail" tagName="h4" />
      <Button>{locale}</Button>

      <Form>
        <Form.Item label={formatMessage({ id: 'eMail' })}>
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item label={formatMessage({ id: 'signUp' })}>
          <Input type="password" placeholder="Password" />
        </Form.Item>
      </Form>
    </div>
  );
};
export default injectIntl(DemoApp);
