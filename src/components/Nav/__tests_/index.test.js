/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', ()=>{
    it('renders', ()=>{
        render(<Nav />);
    });

    //snapshot test
    it('matches snapshot', ()=>{
        const {asFragment} = render(<Nav />);
        //assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });

    it('inserts the emoji into the h2', ()=>{
        const {getByLabelText} = render(<Nav />);
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    })

    describe('links are visible', ()=>{
        it('inserts text into the links', ()=>{
            const {getByTestId} = render(<Nav />);
            // eslint-disable-next-line testing-library/prefer-screen-queries
            expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
            expect(getByTestId('about')).toHaveTextContent('About me');
        });
    })
})