import { useState } from "react";
import { useMutation } from "@apollo/client";
import { DELETE_USER, UPDATE_USER } from "../queries/QueriesUsers";
import Button from "../ui/Button";
import classes from "./CardUser.module.css";
import ModalUpdate from "../ui/ModalUpdate";

function CardUser(props) {
  const [showModalUser, setModalUser] = useState(false);

  const [deleteUser] = useMutation(DELETE_USER);
  const [updateUser] = useMutation(UPDATE_USER);

  const verModalUser = () => {
    setModalUser(true);
  }
  const closeModalUser = () => {
    // console.log("cerrarModal")
    setModalUser(false);
  }

  const deleteuser = (id) => {
    deleteUser({ variables: { id: id } }).then((e) => {
      console.log(e.data.deleteTask);
      window.location.reload();
    });
    // console.log("Eliminar")
  };

  const updateModal = (id, data) => {
    console.log(id, data);
    updateUser({variables: { id: id, input: data}}).then((e) => {
      console.log(e);
      window.location.reload();
    })
  };

  return (
    <div className={classes.card} onClick={verModalUser}>
      <img alt={props.cargo} className={classes.backCard} src={props.img} />
      <div className={classes.bodyCard}>
        <h3 class="title">{props.name}</h3>
        <p>{props.cargo}</p>
        <p>{props.celphone}</p>
      </div>
      <div className={classes.buttons}>
        <Button action="btnUpdate" id={props.id} updateClick={verModalUser} label="Actualizar" />
        <Button
          action="btnDelete"
          id={props._id}
          deleteClick={deleteuser}
          label="Eliminar"
        />
      </div>
      {showModalUser ? <ModalUpdate section="User" onClose={closeModalUser} id={props._id} update={updateModal}/> : null}
    </div>
  );
}
export default CardUser;
