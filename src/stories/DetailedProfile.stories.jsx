import React from 'react';

import DetailedProfile from '../components/DetailedProfile';

export default {
  title: 'DetailedProfile',
  component: DetailedProfile,
};

// // METHOD ONE
// const Template = (args) => <DetailedProfile {...args} />;

// export const NewTemplate = Template.bind({});
// NewTemplate.args = { id:'2', first_name:'john', last_name:'smith' };


// METHOD TWO
export const Template = (args) => <DetailedProfile {...args}/>;


// SOMETHING IS NOT WORKING 