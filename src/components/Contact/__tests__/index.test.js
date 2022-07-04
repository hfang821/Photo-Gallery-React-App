/* eslint-disable jest/no-identical-title */
/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Contact from '..'


afterEach(cleanup)

describe('Contact is rendering', () => {

  it('renders', () => {
    render(<Contact />);
  });

  it('matches snapshot DOM node structure', ()=>{
    //asFragment will generate a snapshot of the About component
    const {asFragment} =render(<Contact />);
    expect(asFragment()).toMatchSnapshot();
})
})

it('renders', () => {
    const { getByTestId } = render(<Contact />)
    expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
  })
   
  it('renders', () => {
    const { getByTestId } = render(<Contact />)
    expect(getByTestId('button')).toHaveTextContent('Submit')
  })