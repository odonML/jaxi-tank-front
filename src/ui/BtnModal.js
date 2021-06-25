import classes from "./BtnModal.module.css"
function BtnModal({onCancel}){

    const cancel = () => {
        onCancel();
    }

    return(
        <button className={classes.btnClose} onClick={cancel}>X</button>
    )
}
export default BtnModal;