import classes from "./Backdrop.module.css"
const Backdrop = ({onCancel}) => {
    return <div className={classes.backdrop} onClick={onCancel}/>
}
export default Backdrop;