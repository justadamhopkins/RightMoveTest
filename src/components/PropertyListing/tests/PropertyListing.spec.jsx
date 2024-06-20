import React from 'react';
import { render, screen } from '@testing-library/react';
import { within } from '@testing-library/dom';
import PropertyListing from '../PropertyListing';
import crossFetch from 'cross-fetch';
import { DUMMY_PROPERTY } from '../../../helpers/fixtures/propertyListings';

jest.mock('cross-fetch', () => {
    return {
        __esModule: true,
        default: jest.fn(),
    };
});

describe('PropertyListing', () => {
    beforeEach(() => {
        crossFetch.mockResolvedValue({
            status: 200,
            json: () => [DUMMY_PROPERTY],
        });
    });

    it('should render five property cards', async () => {
        render(<PropertyListing />);

        const propertiesList = await screen.findByRole('list');
        const propertyCards = await within(propertiesList).findAllByRole('listitem');
        expect(propertyCards).toHaveLength(1);
    });
});
