import Error from "../../../components/custom/Error";
import StatusPage from "../components/Status";

function Error401() {
  return (
    <StatusPage
      icon={<Error className="h-80 w-80" />}
      title="Error 401"
      description="Ocurrió un problema interno en el servidor. Intenta más tarde."
    />
  );
}

export default Error401;
