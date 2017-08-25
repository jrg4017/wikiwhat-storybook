import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, number, color, select } from '@storybook/addon-knobs';

import TestForm from '../components/TestForm';

/**
  * const for declarators
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
storiesOf('TestFeatures', module)
  .addDecorator(CenterDecorator)
  .addDecorator(withKnobs)
  .add('Form with notes attached', () => (
      <WithNotes notes={'You have used 3 different blues for the buttons throughout the design, which do you want to use?'}>
        <TestForm />
      </WithNotes>
    ))
  .add('Action Logger', () => (
    <button className="btn"
      onClick={action('clicked')}>Click to see Action Logger Populate
    </button>
  ))
  .add('Knobs: Dynamic Variables', () => {
    const name = text('Name', 'John Smith');
    const age = number('Age', 89);
    const content = `I am ${name} and I'm ${age} years old`;

    const btnColor = color('Button Color', '#ff00ff');

    const options = {
     range: true,
     min: 60,
     max: 90,
     step: 1,
    };
    const range = number('Temperature', 73, options);

    const selectOptions = {
      red: 'Red',
      blue: 'Blue',
      yellow: 'Yellow',
    };
    const selectColor = select('Select Alert Color', selectOptions, 'red');

    return (
      <div>
        {/* TEXT + NUMBER */}
        <p>{content}</p>

        {/* COLOR */}
        <button className="btn" style={{backgroundColor: btnColor}}>
          Color: {btnColor}
        </button>

        {/* RANGE */}
        <p>Room Temperature is set to: {range}</p>

        {/* SELECT */}
        <p style={{color: selectColor}}>WARNING!!!! ALERT</p>
      </div>);
  })
  .add('Documentation', withInfo('Documentation string about my component')(() =>
      <TestForm />
    ));
