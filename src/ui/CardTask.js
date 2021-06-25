import { useState } from "react";
import { useMutation } from "@apollo/client";
import { DELETE_TASK, UPDATE_TASK } from "../queries/QueriesTasks";
import Button from "../ui/Button";
import classes from "./CardTask.module.css";
import ModalUpdate from "../ui/ModalUpdate";

function CardTask(props) {
  const [showModal, setModal] = useState(false);

  const [deleteTask] = useMutation(DELETE_TASK);
  const [updateTask] = useMutation(UPDATE_TASK);

  const verModal = () => {
    setModal(true);
  }
  const closeModal = () => {
    setModal(false);
  }

  const deletetask = (id) => {
    deleteTask({ variables: { id: id } }).then((e) => {
      console.log(e.data.deleteTask);
      window.location.reload();
    });
  };

  const updateModal = (id, data) => {
    console.log(id, data);
    updateTask({variables: { id: id, input: data}}).then((e) => {
      console.log(e);
    })
  };

  return (
    <div className={classes.card}>
      <div className={classes.bodyCard}>
        <h3 class="title">{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <div className={classes.buttons}>
        <Button
          action="btnUpdate"
          id={props.id}
          updateClick={verModal}
          label="Actualizar"
        />
        <Button
          action="btnDelete"
          id={props._id}
          deleteClick={deletetask}
          label="Eliminar"
        />
      </div>

      {showModal ? <ModalUpdate onClose={closeModal} id={props._id} update={updateModal}/> : null}
    </div>
  );
}
export default CardTask;
