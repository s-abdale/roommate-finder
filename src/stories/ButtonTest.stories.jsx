import React from 'react';

import { ButtonTest } from '../components/ButtonTest';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ButtonTest',
  component: ButtonTest,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ButtonTest {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'ButtonTest',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'ButtonTest',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'ButtonTest',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'ButtonTest',
};
