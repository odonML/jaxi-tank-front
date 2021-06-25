import classes from "./PagesStyles.module.css";
function Home() {
  return (
    <div className={classes.container}>
      <div className={classes.bienvenida}>
        <div className={classes.texto}>
          <h2>Bienvenidos a mi prueba xD </h2>
          <p>Mi idea principal fue tener una vista por entidad, y en dicha vista poder administrar (Crear, ver, editar y eliminar) elementos de esas entidades, las entidades que escogí fueron Users y Tasks. Hay algo que no puede encontrar el motivo por el cual no funcionaba y es que a la hora de actualizar los usuarios no me deja cerrar el formulario. Si ustedes encuentran algún otro error o una recomendación me gustaría que me la hicieran saber porque quiero mejorar, gracias.
            <br/>
            <br/>
          Utilice: React.js, Node.js, Express, MongoDB, Graphql y ApolloCli Para consumir la API, Comencé utilizando MongoDB Atlas pero debido a las fallas de mi internet tuve que cambiar a MongoDB local.</p>
        </div>
      </div>
    </div>
  );
}
export default Home;
