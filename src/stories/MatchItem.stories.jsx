import React from 'react';

import MatchItem from '../components/MatchItem';

export default {
  title: 'MatchItem',
  component: MatchItem,
};

// METHOD ONE
const Template = (args) => <MatchItem {...args} />;

export const NewTemplate = Template.bind({});
NewTemplate.args = { id:'2', first_name:'john', last_name:'smith' };


// METHOD TWO
// export const Template = (args) => <MatchItem id='1' first_name='safia' last_name='abdale' />;