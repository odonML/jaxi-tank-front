import classes from './ModalUpdate.module.css';
import { useRef, useState } from "react";
import BtnModal from "../ui/BtnModal";
import Button from "../ui/Button";

function ModalAdd({ onClose, update, id }) {
  const [error, setError] = useState(false);

  const titleInputRef = useRef();
  const descripInputRef = useRef();

  const cancel = () => {
    onClose();
  };

  const submitHandler = () => {
    const enteredTitle = titleInputRef.current.value;
    const enteredDescrip = descripInputRef.current.value;

    if (enteredTitle === "" || enteredDescrip === "") {
      setError(true);
    } else {
      setError(false);

      const meetupData = {
        title: enteredTitle,
        description: enteredDescrip,
      };

      update(id, meetupData);
    }
  };
  return (
      <div className={classes.modal}>
        <form className={classes.form}>
          <div className={classes.control}>
            <label htmlFor="title">Task Title</label>
            <input type="text" required id="title" ref={titleInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="description">Task Description</label>
            <input type="text" id="description" ref={descripInputRef} />
          </div>
          {error ? <p className={classes.vacio}>Campo Vacio</p> : null}
        </form>
        <div className={classes.buttons}>
          <Button action="btnUpdate" updateClick={submitHandler} label="Actualizar" />
          <BtnModal onCancel={cancel} />
        </div>
      </div>
  );
}
export default ModalAdd;