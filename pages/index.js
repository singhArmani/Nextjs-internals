import Link from "next/link";
import { initializeApollo } from "../lib/apolloClient";
import {
  PostWithApollo,
  ALL_POSTS_QUERY,
} from "../components/postListWithApollo";

const style = {
  padding: "2rem",
  color: "red",
  fontSize: "2rem",
  fontWeight: "bold",
};

function HomePage() {
  return (
    <div>
      <h1>
        This page has no data requirement (missing
        getIntialProps/getServerSideProps) so it will be generated statically
        automatically by NextJs
      </h1>
      <nav>
        <ul style={{ display: "flex", listStyle: "none" }}>
          <li>
            <Link href="/dashboard">
              <a style={style}>Dashboard</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a style={style}>About Me</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a style={style}>Contact</a>
            </Link>
          </li>
          <li>
            <Link href="/books">
              <a style={style}>Books</a>
            </Link>
          </li>
        </ul>
      </nav>
      <h2>The following posts are fetched using Apollo client</h2>
      <PostWithApollo />
    </div>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_POSTS_QUERY,
    variables: { first: 10, skip: 0 },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}

export default HomePage;
