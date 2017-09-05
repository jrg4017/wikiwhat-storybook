import React from 'react';

import { storiesOf } from '@storybook/react';
import { WithNotes } from '@storybook/addon-notes';
import backgrounds from '@storybook/addon-backgrounds';

import Login from '../components/login-component/Login';

storiesOf('Login', module)
  .addDecorator(backgrounds([
    { name: 'white', value: '#FFFFFF', default: true },
    { name: 'light gray', value: '#e7e7e7' },
    { name: 'dark gray', value: '#A9A9A9' }
  ]))
  
  .add('Default Login', () => (
  <WithNotes notes={'This will be the first thing that pops up when user goes onto application'}>
  	<Login />
  </WithNotes>
  ))
  .add('Incorrect Login Attempt', () => (
  	<Login
      alert='Incorrect username or password. Please try again'
      alertClass='alert alert-danger'/>
  ))

;
