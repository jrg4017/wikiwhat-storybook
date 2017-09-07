# WikiWhat Project - Storybook

Set up:
```
npm install
npm run storybook
```
Navigate to [http://localhost:9001](http://localhost:9001)

This is our Storybook for our demo application, WikiWhat. With Storybook, we were able to build the components of our app independently, toggle between the different states, and index them.

## Addons:

Storybook has many addons maintained by the team and community addons to incorporate additional functionality. Full list of them [here](https://storybook.js.org/addons/addon-gallery/).

A few of the addons we utilized:
  - notes
  - Knobs
  - info
  - README
  - backgrounds

 To install the addons we utilized:
 `npm i --save-dev @storybook/addon-actions @storybook/addon-links @storybook/addon-notes @storybook/addon-knobs @storybook/addon-info @storybook/addon-backgrounds storybook-readme`

To demo these addons in our Storybook, go to "Test Addons" set. 

## Use Case:
We see this as a great collaboration tool between developers and those who may not be experienced with code. The addons (especially the knob addon) allow anyone to be able to see and point out details they may want to change regardless of coding experience. 

Read more information on setting up Storybook and its addons go to their website: [https://storybook.js.org/](https://storybook.js.org/basics/guide-react/)
