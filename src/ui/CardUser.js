import classes from "./CardUser.module.css";
import Button from "../ui/Button";
import { useMutation } from "@apollo/client";
import { DELETE_USER } from "../queries/QueriesUsers";

function CardUser(props) {
  const [deleteUser] = useMutation(DELETE_USER);

  const deleteuser = (id) => {
    deleteUser({ variables: { id: id } }).then((e) => {
      console.log(e.data.deleteTask);
      window.location.reload();
    });
    // console.log("Eliminar")
  };

  const updateModal = () => {
    console.log("Actualizar");
  };
  return (
    <div className={classes.card}>
      <img alt={props.cargo} className={classes.backCard} src={props.img} />
      <div className={classes.bodyCard}>
        <h3 class="title">{props.name}</h3>
        <p>{props.cargo}</p>
        <p>{props.celphone}</p>
      </div>
      <div className={classes.buttons}>
        <Button action="btnUpdate" id={props.id} updateClick={updateModal} label="Actualizar" />
        <Button
          action="btnDelete"
          id={props._id}
          deleteClick={deleteuser}
          label="Eliminar"
        />
      </div>
    </div>
  );
}
export default CardUser;
