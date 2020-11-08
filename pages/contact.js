function Contact({ phone }) {
  return <h1>If you want to reach out, my number is {phone}</h1>;
}

export async function getServerSideProps() {
  return {
    props: { phone: "02 84841111" },
  };
}
export default Contact;
