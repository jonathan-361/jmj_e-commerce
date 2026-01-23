import Error500Icon from "../../../components/custom/SVG/Error500Icon";
import StatusPage from "../components/Status";

function Error500() {
  return (
    <StatusPage
      icon={<Error500Icon className="h-90 w-auto text-white" />}
      description={`Ups… algo salió mal de nuestro lado
      Estamos trabajando para solucionarlo lo antes posible.`}
    />
  );
}

export default Error500;
