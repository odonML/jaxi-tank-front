import classes from "./ListUser.module.css";
import CardUser from "../ui/CardUser"
import { useQuery } from "@apollo/react-hooks";
import { GET_USERS } from "../queries/QueriesUsers";

function ListUser() {
  const { loading, error, data } = useQuery(GET_USERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  
  // console.log(data.users);
  let users = data.users;
  return (
    <ul className={classes.list}>
      {users.map((user) =>(
        <CardUser key={user._id} {...user}/>
      ))}
    </ul>
  );
}
export default ListUser;
