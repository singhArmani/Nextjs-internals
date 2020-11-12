function About({ name }) {
  return (
    <h1>
      This page is statically generated at build time. Hi {name}, glad to see
      you here 👋
    </h1>
  );
}

export async function getStaticProps() {
  console.log("getStaticProps: About page");
  // Make an api call to the name
  return {
    props: { name: "Amandeep singh" },
  };
}
export default About;
