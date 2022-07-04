import React from 'react';
//est creates a simulated DOM in a Node.js environment to approximate the DOM (no component is actually visibly rendered).
//cleanup function is used to remove components from the DOM to prevent memory leaking
import {render,cleanup} from '@testing-library/react'
import About from '..';

//ensure that after each test, we won't have any leftover memory data that could give us false results
afterEach(cleanup);

describe('About component', ()=>{
    it('renders',()=>{
        render(<About />);
    });

    it('matches snapshot DOM node structure', ()=>{
        //asFragment will generate a snapshot of the About component
        const {asFragment} =render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
})