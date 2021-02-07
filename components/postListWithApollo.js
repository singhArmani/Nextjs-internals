import { gql, useQuery } from '@apollo/client';
import Loading from './loading';

export const ALL_POSTS_QUERY = gql`
  query allPosts($first: Int!, $skip: Int!) {
    allPosts(first: $first, skip: $skip) {
      id
      title
    }
  }
`;

export const PostWithApollo = () => {
  const { data, error, loading } = useQuery(ALL_POSTS_QUERY, {
    variables: { first: 2, skip: 0 },
  });

  if (loading) return <Loading />;

  if (error) return <p>Error occurred</p>;

  const { allPosts } = data;

  return (
    <section>
      <ul aria-label="list of blog posts">
        {allPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </section>
  );
};
