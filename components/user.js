import { gql, useQuery } from "@apollo/client";
import Loading from "./loading";

const GET_USERS = gql`
  {
    allUsers(first: 5) {
      firstName
      id
    }
  }
`;

const Users = () => {
  const { data, loading } = useQuery(GET_USERS);

  if (loading) return <Loading />;

  const { allUsers } = data;

  return (
    <section>
      <h2>List of users fetch with apollo client</h2>
      <ul>
        {allUsers.map((user) => (
          <li key={user.id}>{user.firstName}</li>
        ))}
      </ul>
    </section>
  );
};

export default Users;
