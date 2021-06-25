import classes from "./ModalAdd.module.css";
import { useRef, useState } from "react";
// import BtnModal from "../ui/BtnModal";
import Button from "../ui/Button";

function ModalAdd({ onClose, add }) {
  const [error, setError] = useState(false);

  const titleInputRef = useRef();
  const descripInputRef = useRef();

  // const cancel = () => {
  //   onClose();
  // };
  const submitHandler = () => {
    const enteredTitle = titleInputRef.current.value;
    const enteredDescrip = descripInputRef.current.value;

    if (enteredTitle === "" || enteredDescrip === "") {
      setError(true);
    } else {
      const meetupData = {
        title: enteredTitle,
        description: enteredDescrip,
      };

      add(meetupData);
    }
  };
  return (
    <div className={classes.aling}>
      <div className={classes.modal}>
        <form className={classes.form}>
          <h4>Agregar Task</h4>
          <div className={classes.control}>
            <label htmlFor="title">Task Title</label>
            <input type="text" required id="title" ref={titleInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="description">Task Description</label>
            <textarea
              id="description"
              required
              rows="5"
              ref={descripInputRef}
            ></textarea>
          </div>
          {error ? <p className={classes.vacio}>Campo Vacio</p> : null}
        </form>
        <div className={classes.buttons}>
          <Button action="btnAdd" addClick={submitHandler} label="Agregar" />
          {/* <BtnModal onCancel={cancel} /> */}
        </div>
      </div>
    </div>
  );
}
export default ModalAdd;
