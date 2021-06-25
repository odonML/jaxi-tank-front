import { useState } from "react";
import { useMutation } from "@apollo/client";
import { DELETE_TASK, UPDATE_TASK } from "../queries/QueriesTasks";
import Button from "../ui/Button";
import classes from "./CardTask.module.css";
import ModalUpdate from "../ui/ModalUpdate";

function CardTask(props) {
  const [showModal, setModalTask] = useState(false);

  const [deleteTask] = useMutation(DELETE_TASK);
  const [updateTask] = useMutation(UPDATE_TASK);

  const verModal = () => {
    setModalTask(true);
  }
  const closeModal = () => {
    console.log("cerrarModal")
    setModalTask(false);
  }

  const deletetask = (id) => {
    deleteTask({ variables: { id: id } }).then((e) => {
      console.log(e.data.deleteTask);
      window.location.reload();
    });
  };
  
  const updateModalTask = (id, data) => {
    console.log(id, data);
    updateTask({variables: { id: id, input: data}}).then((e) => {
      console.log(e);
      window.location.reload();
    })
  };

  return (
    <div className={classes.card}>
      <div className={classes.bodyCard} onClick={verModal}>
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

      {showModal ? <ModalUpdate section="Task" onClose={closeModal} id={props._id} {...props} update={updateModalTask}/> : null}
    </div>
  );
}
export default CardTask;
