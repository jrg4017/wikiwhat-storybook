import React from 'react';

import { storiesOf } from '@storybook/react';
import { WithNotes } from '@storybook/addon-notes';
import backgrounds from '@storybook/addon-backgrounds';

import Selection from '../components/selection-component/Selection';
import Answer from '../components/selection-component/Answer';

// dummy article holder
const correctArticle = {
  wikiURL: 'http://www.wikihow.com/Make-a-Tumblr-Room',
  title: 'How to Make a Tumblr Room'
};

storiesOf('Selection', module)
    // .addDecorator(backgrounds([
    //   { name: 'white', value: '#FFFFFF', default: true },
    //   { name: 'light gray', value: '#e7e7e7' },
    //   { name: 'dark gray', value: '#A9A9A9' }
    // ]))
	.add('default selection', () => (
	  <WithNotes notes={'You have used 3 different blues for the buttons throughout the design, which do you want to use?'}>
	    <Selection />
	  </WithNotes>
	))
	.add('selected correct answer', () => (
	  <Answer isCorrect={true} correctArticle={correctArticle} />
	))
	.add('selected wrong answer', () => (
	  <Answer isCorrect={false} correctArticle={correctArticle} />
	))

	;
