function Posts({ posts }) {
  return (
    <div>
      <h2>
        This Posts page users <code>.env.local</code> file to consume{" "}
        <b>Environment variable</b>.<br />
        <br /> We're goint to statically generate this page by making a fake API
        call inside <code>getStaticProps</code>. Important thing to remember is
        that we can make calls to database directly into{" "}
        <code>getStaticProps</code> call.
      </h2>
      <h3>
        Here we have also use <code>.env.development</code> to pass in a default
        value <code>/post</code> as url path to retrieve posts.
      </h3>
      <h3>Things to remember</h3>
      <ul>
        <li>
          Never put <code>.env.local</code> in git. This is where your secrets
          lies.
        </li>
        <li>
          We can use <code>.env.development</code> for default values for
          development purposes.
        </li>
        <li>
          <code>.env.local</code> will always override env variables defined in
          other <i>env</i> files.
        </li>
        <li>
          Var created with <code>NEXT_PUBLIC_</code> will be exposed to browser.
          Nextjs will inline the value in JS sent to client.
          <br />
          This value is inlined by NEXTjs:{" "}
          <b>{process.env.NEXT_PUBLIC_BROWSER_VAR}</b>.
        </li>
      </ul>
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1rem",
          listStyle: "none",
          padding: 0,
        }}
      >
        {posts.splice(0, 10).map((e, i) => (
          <li key={i}>
            <article
              style={{
                display: "flex",
                flexDirection: "column",
                background: "lightgray",
                padding: "1rem",
                borderRadius: "0.5rem",
              }}
            >
              <h4>{e.title}</h4>
              <p>{e.body}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    `${process.env.API_BASE_URL}${process.env.POSTS_URL}`
  );
  const result = await response.json();
  return {
    props: { posts: result },
  };
}
export default Posts;
