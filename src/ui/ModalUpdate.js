import classes from './ModalUpdate.module.css';
import { useRef, useState } from "react";
import BtnModal from "../ui/BtnModal";
import Button from "../ui/Button";

function ModalUpdate({ section, onClose, id, update}) {
  const [error, setError] = useState(false);

  let titleInputRef = useRef();
  let descripInputRef = useRef();

  const nameInputRef = useRef();
  const cargoInputRef = useRef();
  const celphoneInputRef = useRef();
  const imgInputRef = useRef();

  if(section === "Task"){
    var task = true;
  }if(section === "User"){
    var user = true;
  }

  const cancel = () => {
    onClose();
    // console.log('cancel modal');
  };

  const submitHandler = () => {
    if(section === "Task"){
      console.log("task")
      const enteredTitle = titleInputRef.current.value;
    const enteredDescrip = descripInputRef.current.value;

    const taskData={};
    if(enteredTitle !== ""){
      Object.assign(taskData, {title: enteredTitle});
    }else if(enteredDescrip !== ""){
      Object.assign(taskData, {description: enteredDescrip});
    }else{
      setError(true);
    }
    update(id, taskData);
    
    }if(section === "User"){
      const enteredName = nameInputRef.current.value;
      const enteredCargo = cargoInputRef.current.value;
      const enteredCelphone = celphoneInputRef.current.value;
      const enteredImg = imgInputRef.current.value;

      const userData = {};
      if(enteredName !== ""){
        Object.assign(userData, {name: enteredName});
      }else if(enteredCargo !== ""){
        Object.assign(userData, {cargo: enteredCargo})
      }else if(enteredCelphone !== ""){
        Object.assign(userData, {celphone: parseFloat(enteredCelphone)})
      }else if(enteredImg !== ""){
        Object.assign(userData, {img: enteredImg})
      }else{
        setError(true);
        return;
      }
      update(id,userData);

      
    }
  };
  return (
    <div className={classes.modal}>
        <div className={classes.btnClose}>
          <BtnModal onCancel={cancel} />
          </div>
        <form className={classes.form}>
          {task? <div>
            <div className={classes.control}>
            <label htmlFor="title">Task Title </label>
            <input type="text" required id="title" ref={titleInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="description">Task Description</label>
            <input type="text" id="description" ref={descripInputRef} />
          </div>
          </div>: null}

          {user ? <div>
            <h4>Editar User</h4>
          <div className={classes.control}>
            <label htmlFor="name">User Name</label>
            <input type="text" id="name" ref={nameInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="cargo">User Cargo</label>
            <input type="text" id="cargo" ref={cargoInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="celphone">User Celphone</label>
            <input type="text" id="celphone" ref={celphoneInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="img">User Photo</label>
            <input type="text" id="img" ref={imgInputRef} />
          </div>
          </div>: null}
        </form>
        <div className={classes.buttons}>
          <Button action="btnUpdate" updateClick={submitHandler} label="Actualizar" />
          {error? <p className={classes.vacio}>Campos Vacios</p>:null}
        </div>
      </div>
  );
}
export default ModalUpdate;