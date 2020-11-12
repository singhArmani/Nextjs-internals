import useSWR from "swr";
import Loading from "../components/loading";

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function Dashboard() {
  const { data, error } = useSWR("/api/user", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data)
    return (
      <div>
        This 👇 part will be statically generated at build time by NextJS.
        Fetching of the name is done by <b>Client</b>.
        <Loading />
      </div>
    );
  return (
    <div>
      <h1>
        This page is rendered client side with useSWR. The user we're fetching
        is {data.name.toUpperCase()}.
      </h1>
    </div>
  );
}
