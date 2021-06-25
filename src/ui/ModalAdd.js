import classes from "./ModalAdd.module.css";
import { useRef, useState } from "react";
// import BtnModal from "../ui/BtnModal";
import Button from "../ui/Button";

function ModalAdd({ section, onClose, add }) {
  const [error, setError] = useState(false);
  const titleInputRef = useRef();
  const descripInputRef = useRef();

  const nameInputRef = useRef();
  const cargoInputRef = useRef();
  const celphoneInputRef = useRef();
  const imgInputRef = useRef();

  if(section === "Task"){
    var task = true;
  }if(section === "User"){
    var user = true;
  }

  // const cancel = () => {
  //   onClose();
  // };
  
  const submitHandler = () => {
    if (section === "Task") {
      const enteredTitle = titleInputRef.current.value;
      const enteredDescrip = descripInputRef.current.value;

      if (enteredTitle === "" || enteredDescrip === "") {
        setError(true);
      } else {
        const taskData = {
          title: enteredTitle,
          description: enteredDescrip,
        };

        add(taskData);
      }
    }if(section === "User"){
      const enteredName = nameInputRef.current.value;
      const enteredCargo = cargoInputRef.current.value;
      const enteredCelphone = celphoneInputRef.current.value;
      const enteredImg = imgInputRef.current.value;

      if (enteredName === "" || enteredCargo === "" || enteredImg === "" || enteredCelphone === "") {
        setError(true);
      } else {
        const userData = {
          name: enteredName,
          cargo: enteredCargo,
          celphone: parseFloat(enteredCelphone)	,
          img: enteredImg
        };

        add(userData);
      };
    }
  };
  return (
    <div className={classes.aling}>
      <div className={classes.modal}>
        <form className={classes.form}>
         {task ?  <div>
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
         </div> : null}
          {user? <div>
          <h4>Agregar User</h4>
          <div className={classes.control}>
            <label htmlFor="name">User Name</label>
            <input type="text" required id="name" ref={nameInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="cargo">User Cargo</label>
            <input type="text" required id="cargo" ref={cargoInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="celphone">User Celphone</label>
            <input type="text" required id="celphone" ref={celphoneInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="img">User Photo</label>
            <input type="text" required id="img" ref={imgInputRef} />
          </div>
         </div>: null}

          {error ? <p className={classes.vacio}>Campo Vacio</p> : null}
        </form>
        <div className={classes.buttons}>
          <Button action="btnAdd" addClick={submitHandler} label="Agregar" />
        </div>
      </div>
    </div>
  );
}
export default ModalAdd;
