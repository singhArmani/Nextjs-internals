import useSWR from "swr";
import Loading from "../components/loading";

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function Dashboard() {
  const { data, error } = useSWR("/api/user", fetcher);

  console.log({ data });
  if (error) return <div>Failed to load</div>;
  if (!data) return <Loading />;
  return (
    <div>
      This page is rendered client side with useSWR. The user we're fetching is{" "}
      {data.name}.
    </div>
  );
}
