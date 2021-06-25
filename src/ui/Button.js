import classes from "./Button.module.css";
const Button = ({action, id, deleteClick, updateClick, addClick, label}) => {


    let btnColor;
    if(action ==="btnAdd"){
        btnColor = classes.btnAdd
    }if(action ==="btnDelete"){
        btnColor = classes.btnDelete
    }if(action ==="btnUpdate"){
        btnColor = classes.btnUpdate
    }
    
    const btnClick = ()=>{
        if(action ==="btnAdd"){
            addClick()
        }if(action ==="btnDelete"){
            deleteClick(id);
        }if(action ==="btnUpdate"){
            updateClick(id);
        }
    
    }


    return(
        <button className={btnColor} onClick={btnClick}>{label}</button>
    )

}
export default Button;