import Link from "next/link";

const style = {
  padding: "2rem",
  color: "red",
  fontSize: "2rem",
  fontWeight: "bold",
};

function HomePage() {
  return (
    <div>
      This has no data requirement (missing getIntialProps/getServerSideProps)
      so it will be generated statically automatically by NextJs
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
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;
