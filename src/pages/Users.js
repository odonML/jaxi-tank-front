import { useState } from "react";
import classes from "./PagesStyles.module.css";
import Button from "../ui/Button";
import UserList from "../list/ListUser";
import ModalAdd from "../ui/ModalAdd";
import Backdrop from "../ui/Backdrop";
import { useMutation } from "@apollo/react-hooks";
import { ADD_USER } from "../queries/QueriesUsers";

function Users() {
  const [showModal, setModal] = useState(false);

  const [createUser] = useMutation(ADD_USER);

  const verModal = () => {
    setModal(true);
  }
  const closeModal = () => {
    setModal(false);
  }
  const addUser = (data) => {
    // console.log(data);
    createUser({ variables: { input: data}}).then((e) => {
      // console.log(e.data.createTask);
      window.location.reload();
    })
  }

  return (
    <div className={classes.container}>
      <div className={classes.secHead}>
        <h1>Users</h1>
        <Button action="btnAdd" addClick={verModal} label="Agregar User" />
      </div>
      <div className={classes.secList}>
        <UserList/>
      </div>
      {showModal ? <ModalAdd section="User" onClose={closeModal} add={addUser}/> : null}
      {showModal && <Backdrop onCancel={closeModal}/>}
    </div>
  );
}
export default Users;
