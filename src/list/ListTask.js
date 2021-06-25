import classes from "./ListUser.module.css";
import { useQuery } from "@apollo/react-hooks";
import { GET_TASKS } from "../queries/QueriesTasks";
import CardTask from "../ui/CardTask";

function ListTask() {
  const { loading, error, data } = useQuery(GET_TASKS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  
//   console.log(data.tasks);
  let tasks = data.tasks;
  return (
    <ul className={classes.list}>
      {tasks.map(task =>(
          <CardTask key={task._id} {...task} />
      ))}
    </ul>
  );
}
export default ListTask;
