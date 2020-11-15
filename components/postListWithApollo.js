import { gql, useQuery } from "@apollo/client";
import Users from "./user";
import Loading from "./loading";

export const ALL_POSTS_QUERY = gql`
  query allPosts($first: Int!, $skip: Int!) {
    allPosts(orderBy: { createdAt: desc }, first: $first, skip: $skip) {
      id
      title
      votes
      url
      createdAt
    }
    _allPostsMeta {
      count
    }
  }
`;

export const PostWithApollo = () => {
  const { data, error, loading } = useQuery(ALL_POSTS_QUERY, {
    variables: { first: 10, skip: 0 },
  });

  if (loading) return <Loading />;

  if (error) return <p>Error occurred</p>;

  const { allPosts } = data;

  return (
    <section>
      <ul>
        {allPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <Users />
    </section>
  );
};
