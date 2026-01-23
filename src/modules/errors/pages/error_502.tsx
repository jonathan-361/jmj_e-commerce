import Error502Icon from "../../../components/custom/SVG/Error502Icon";
import StatusPage from "../components/Status";

function Error502() {
  return (
    <StatusPage
      icon={<Error502Icon className="h-80 w-auto" />}
      description={`Problemas de comunicación
      Estamos teniendo dificultades para conectarnos con el servicio.
      No te preocupes, es temporal.`}
    />
  );
}

export default Error502;
