import Error401Icon from "../../../components/custom/SVG/Error401Icon";
import StatusPage from "../components/Status";

function Error401() {
  return (
    <StatusPage
      icon={<Error401Icon className="h-80 w-80" />}
      description={`Necesitamos saber quién eres. Tu sesión no está activa o expiró. Inicia sesión para continuar.`}
    />
  );
}

export default Error401;
