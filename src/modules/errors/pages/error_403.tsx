import Error403Icon from "../../../components/custom/SVG/Error403Icon";
import StatusPage from "../components/Status";

function Error403() {
  return (
    <StatusPage
      icon={<Error403Icon className="h-80 w-80" />}
      description={`Por aquí no se puede pasar!!!
      No tienes permisos para acceder a esta sección.
      Si crees que es un error, contáctanos.`}
    />
  );
}

export default Error403;
