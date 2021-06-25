import { useState } from "react";
import classes from "./PagesStyles.module.css";
import Button from "../ui/Button";
import ListTask from "../list/ListTask";
import ModalAdd from "../ui/ModalAdd";
import Backdrop from "../ui/Backdrop";
import { useMutation } from "@apollo/react-hooks";
import { ADD_TASK } from "../queries/QueriesTasks";

function Tasks() {
  const [showModal, setModal] = useState(false);

  const [createTask] = useMutation(ADD_TASK);

  const verModal = () => {
    setModal(true);
  }
  const closeModal = () => {
    setModal(false);
  }
  const addTask = (data) => {
    createTask({ variables: { input: data}}).then((e) => {
      console.log(e.data.createTask);
      window.location.reload();
    })
  }
  return (
    <div className={classes.container}>
      <div className={classes.secHead}>
        <h1>Tasks</h1>
        <Button action="btnAdd" addClick={verModal} label="Agregar" />
      </div>
      <div className={classes.secList}>
        <ListTask/>
      </div>

      {showModal ? <ModalAdd section="Task" onClose={closeModal} add={addTask}/> : null}
      {showModal && <Backdrop onCancel={closeModal}/>}
    </div>
  );
}
export default Tasks;
