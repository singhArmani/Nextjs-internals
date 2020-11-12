function Contact({ phone }) {
  return (
    <h1>
      This page is server rendered on <b>demand</b>: only when a request comes
      in. If you want to reach out, my number is {phone}
    </h1>
  );
}

export async function getServerSideProps() {
  return {
    props: { phone: "02 84841111" },
  };
}
export default Contact;
