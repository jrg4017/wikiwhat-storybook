import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

storiesOf('Button', module)
  .add('form', () => (
    <form action="">
      <input type="text" placeholder="First Name"/>
      <input type="text" placeholder="Last Name"/>
      <button type="submit">Submit</button>
    </form>
  ))
  .add('with some emoji', () => (
    <button onClick={action('clicked')}>😀 😎 👍 💯</button>
  ))
  ;
