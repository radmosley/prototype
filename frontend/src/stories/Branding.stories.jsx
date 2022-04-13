import React from 'react';

import Branding from '../components/molecules/Branding';

export default {
  title: 'Branding',
  component: Branding,
};

export const Template = () => <Branding></Branding>;

export const Large = Template.bind({});
Large.args = {};

export const Medium = Template.bind({});
Medium.args = {};

export const Small = Template.bind({});
Small.args = {};
