import { DashboardPage } from '../../components/DashboardPage';
import React from 'react';
import { shallow } from 'enzyme';

test('should render dashboard', () => {
    const wrapper = shallow(<DashboardPage />);
    expect(wrapper).toMatchSnapshot();
})
