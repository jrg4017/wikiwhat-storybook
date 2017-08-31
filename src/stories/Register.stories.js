import React from 'react';

import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';

import Register from '../components/account-component/Register';

storiesOf('Register', module)
  .addDecorator(backgrounds([
    { name: 'white', value: '#FFFFFF', default: true },
    { name: 'light gray', value: '#e7e7e7' },
    { name: 'dark gray', value: '#A9A9A9' },
  ]))
  .add('Default State', () =>(
  	<Register />
	))
  .add('Account already exists', () =>(
  	<Register alert='Username already exists' alertClass='alert alert-danger'/>
	));
