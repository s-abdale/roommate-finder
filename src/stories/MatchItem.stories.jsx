import React from 'react';

import { MatchItem } from '../components/MatchItem';

export default {
  title: 'Example/MatchItem',
  component: MatchItem,
};

const Template = (args) => <MatchItem {...args} />;

// export const LoggedIn = Template.bind({});
// LoggedIn.args = {
//   user: {},
// };

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};
