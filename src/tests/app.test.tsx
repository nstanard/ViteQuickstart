import React from 'react';
import { expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../app';

// DOCS:
//  - https://testing-library.com/docs/react-testing-library/setup/
//  - https://testing-library.com/docs/react-testing-library/api

describe('App', () => {
    test('App renders', async () => {
        render(<App />);
        expect(screen.getByRole('heading').innerHTML).toEqual('Hi!');
    });
});
