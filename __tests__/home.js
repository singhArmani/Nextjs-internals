import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { render, screen, within } from '@testing-library/react';
import { axe } from 'jest-axe';

import HomePage from '../pages/index';
import { ALL_POSTS_QUERY } from '../components/postListWithApollo';

// NOTE: could have used fake data creation libray as suggested by Kent
const mocks = [
  {
    request: {
      query: ALL_POSTS_QUERY,
      variables: { first: 2, skip: 0 },
    },
    result: {
      data: {
        allPosts: [
          {
            id: '1',
            title: 'Spiderman',
          },
          {
            id: '2',
            title: 'Incredible Hulk',
          },
        ],
      },
    },
  },
];

test('should render home page without error', async () => {
  const { container } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <HomePage />
    </MockedProvider>
  );

  // Using findByRole instead of `waitFor`
  const list = await screen.findByRole('list', { name: /list of blog posts/i });

  const result = await axe(container);

  // NOTE: Be explicit about assertions that somethign exist
  expect(screen.getByRole('heading', { name: /This page has no data requirement/i })).toBeInTheDocument();
  expect(
    screen.getByRole('heading', {
      name: /The following posts are fetched using apollo client/i,
    })
  ).toBeInTheDocument();

  expect(list).toBeInTheDocument();

  const { getAllByRole } = within(list);

  expect(getAllByRole('listitem').length).toBe(2);
  expect(result).toHaveNoViolations();
});
