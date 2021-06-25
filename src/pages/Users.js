import classes from "./PagesStyles.module.css";
import Button from "../ui/Button";
import UserList from "../list/ListUser";

function Users() {

  const addModal = () => {
    console.log("Agregar");
  }

  return (
    <div className={classes.container}>
      <div className={classes.secHead}>
        <h1>Users</h1>
        <Button action="btnAdd" addClick={addModal} label="Agregar User" />
      </div>
      <div className={classes.secList}>
        <UserList/>
      </div>
    </div>
  );
}
export default Users;
