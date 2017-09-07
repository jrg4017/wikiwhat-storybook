import React from 'react';
import { storiesOf } from '@storybook/react';

import withReadme from 'storybook-readme/with-readme';
import backgrounds from '@storybook/addon-backgrounds';
import { withKnobs, text, boolean, number, color, select } from '@storybook/addon-knobs';

import LoginReadMe from '../components/login-component/README.md';
import Login from '../components/login-component/Login';
import ButtonReadme from '../components/test-button/README.md';

/**
  * const for declarators - wrap entire content with formatting etc
  */
const styles = {
  textAlign: 'center',
};
const CenterDecorator = (storyFn) => (
  <div style={styles}>
    { storyFn() }
  </div>
);

/**
  * stories displaying different features
  */
storiesOf('UI testing', module)
  .addDecorator(CenterDecorator)
  .addDecorator(withKnobs)
  .addDecorator(backgrounds([
    { name: 'white', value: '#FFFFFF', default: true },
    { name: 'light gray', value: '#e7e7e7' },
    { name: 'dark gray', value: '#A9A9A9' }
  ]))

  // Notes Addon
  .add('login component', withReadme(LoginReadMe,
    () => {
    const login = text('login', 'Please login to keeep trck of your score');

    const btnColor = color('Button Color', '#ff00ff');

    return (
      <div>
        {login}
        <form className="form1">
          <input type='text' placeholder='Username' required />
          <input type='text' placeholder='Password' required />
          <button style={{backgroundColor: btnColor}} type='submit'>Login</button>

          <div className="register-text1">
            <a href=' '>Don't have an account? Create one!</a>
          </div>
        </form>
      </div>
    );
  }))
