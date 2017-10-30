import 'babel-polyfill';

import React from 'react';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import createRouterContext from 'react-router-test-context';
import { shallow } from 'enzyme';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'


Object.assign(global, {
  mount,
  jasmineEnzyme,
  React
})

configure({ adapter: new Adapter() });

beforeEach(() => {
  jasmineEnzyme();
})

const context = createRouterContext()


// function to require all modules for a given context
let requireAll = requireContext => {
  requireContext.keys().forEach(requireContext);
};

// require all js files except testHelper.js in the test folder
requireAll(require.context('./', true, /^((?!testHelper).)*\.jsx?$/));

// require all js files except main.js in the src folder
requireAll(require.context('../src/', true, /^((?!main).)*\.jsx?$/));

// output to the browser's console when the tests run
console.info(`TESTS RAN AT ${new Date().toLocaleTimeString()}`);
