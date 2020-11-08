function About({ name }) {
  return <h1>Hi {name}, glad to see you here 👋</h1>;
}

export async function getStaticProps() {
  console.log("getStaticProps: About page");
  return {
    props: { name: "Amandeep singh" },
  };
}
export default About;
