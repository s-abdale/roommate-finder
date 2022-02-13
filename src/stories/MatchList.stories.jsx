import React from 'react';

import { MatchList } from '../components/MatchList';

export default {
  title: 'Example/MatchList',
  component: MatchList,
};

const Template = (args) => <MatchList {...args} />;

// export const LoggedIn = Template.bind({});
// LoggedIn.args = {
//   user: {},
// };

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};
