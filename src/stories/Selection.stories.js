import React from 'react';
import { storiesOf } from '@storybook/react';

import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { WithNotes } from '@storybook/addon-notes';
import withReadme from 'storybook-readme/with-readme';
import { withKnobs, text, boolean, number, color, select } from '@storybook/addon-knobs';
import backgrounds from "@storybook/addon-backgrounds";

import Selection from '../components/test-Selection/Selection';

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
storiesOf('Selection', module)
  	.addDecorator(CenterDecorator)

    .addDecorator(backgrounds([
      { name: "white", value: "#FFFFFF", default: true },
      { name: "light gray", value: "#e7e7e7" },
      { name: "dark gray", value: "#A9A9A9" }
    ]))

	.add('default selection', () => (
	  <WithNotes notes={'You have used 3 different blues for the buttons throughout the design, which do you want to use?'}>
	    <Selection />
	  </WithNotes>
	))

	.add('selected answer', () => (
	  <WithNotes notes={'You have used 3 different blues for the buttons throughout the design, which do you want to use?'}>
	    <Selection />
	  </WithNotes>
	))

	;