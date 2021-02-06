import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import HomePage from '../pages/index';

const mocks = [];

test('should render home page without error', async () => {
  window.history.pushState({}, 'Test page', '/');
  const { container } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <HomePage />
    </MockedProvider>
  );

  const result = await axe(container);

  // NOTE: Be explicit about assertions that somethign exist
  expect(screen.getByRole('heading', { name: /This page has no data requirement/i })).toBeInTheDocument();
  expect(
    screen.getByRole('heading', {
      name: /The following posts are fetched using apollo client/i,
    })
  ).toBeInTheDocument();

  expect(result).toHaveNoViolations();
});
