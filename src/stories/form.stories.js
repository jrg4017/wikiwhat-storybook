import React from 'react';
import { storiesOf } from '@storybook/react';

import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { WithNotes } from '@storybook/addon-notes';
import withReadme from 'storybook-readme/with-readme';
import { withKnobs, text, boolean, number, color, select } from '@storybook/addon-knobs';

import TestForm from '../components/test-form/TestForm';
import TestButton from '../components/test-button/TestButton';
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
storiesOf('Test Addons', module)
  .addDecorator(CenterDecorator)
  .addDecorator(withKnobs)

  // Notes Addon
  .add('Form with notes attached', () => (
      <WithNotes notes={'You have used 3 different blues for the buttons throughout the design, which do you want to use?'}>
        <TestForm />
      </WithNotes>
    ))

  // Action Addon
  .add('Action Logger', () => (
    <button className="btn"
      onClick={action('clicked')}>Click to see Action Logger Populate
    </button>
  ))

  // Knob Addon
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

  // Info Addon
  .add('Documentation', withInfo({
    header: true, // Toggles display of header with component name and description
    inline: false, // Displays info inline vs click button to view
    text: 'This form shows information about what is being shown',
  })(() =>
    <TestForm title="Please tell us your name"/>
    ))
    .add('Documentation Inline', withInfo({
      header: false, // Toggles display of header with component name and description
      inline: true, // Displays info inline vs click button to view
      source: false, // Displays the source of story Component
      text: 'This form shows information about what is being shown',
    })(() =>
        <TestForm title="Please tell us your name"/>
      ))

  // README Addon
  .add('Readme file Documentation', withReadme(ButtonReadme,
    () => <TestButton title="Hello Button"/>))
  ;
