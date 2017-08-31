import React from 'react';

import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import Navbar from '../components/navbar-component/Navbar';
import NavbarReadMe from '../components/navbar-component/README.md';

storiesOf('Navbar', module)
  .add('default navbar', withReadme(NavbarReadMe, () => (
      <Navbar />
  )));
