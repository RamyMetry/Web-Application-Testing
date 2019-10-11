import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"




it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

afterEach(rtl.cleanup);

test('Render The App',()=>{
    const wrapper = rtl.render(<App/>)
    wrapper.debug(wrapper.getByText('Player At'))
    wrapper.debug(wrapper.queryByText("Strikes"))
    wrapper.debug(wrapper.queryByText("Hit"))
})
