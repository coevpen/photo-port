import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

//ensures we dont have leftover memory data that could give false results
afterEach(cleanup);

describe('About component', () => {
    // First Test
    it('renders', () => {
        render(<About />);
    });

    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });
})