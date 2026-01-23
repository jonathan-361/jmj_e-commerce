import Error404Icon from "../../../components/custom/SVG/Error404Icon";
import StatusPage from "../components/Status";

function Error404() {
  return (
    <StatusPage
      icon={<Error404Icon className="h-90 w-auto" />}
      description={`No encontramos lo que buscas
      Tal vez la página se movió o la dirección no es correcta.`}
    />
  );
}

export default Error404;
