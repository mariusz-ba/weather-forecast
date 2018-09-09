import React from 'react';
import { shallow } from 'enzyme';
import WeatherIcon from '..';

describe('WeatherIcon', () => {
  it('has a module', () => {
    expect(WeatherIcon).toBeDefined();
  })

  it('renders WeatherIcon component', () => {
    const icon = 'icon-class';
    const name = 'icon-name';
    const wrapper = shallow(<WeatherIcon icon={icon} name={name}/>);
    expect(wrapper.type()).toMatch('div');
    expect(wrapper.find('i').hasClass(icon)).toBe(true);
    expect(wrapper.find('span').text()).toMatch(name);
  })
})