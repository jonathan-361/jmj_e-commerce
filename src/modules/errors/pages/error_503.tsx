import Error from "../../../components/custom/Error";
import StatusPage from "../components/Status";

function Error503() {
  return (
    <StatusPage
      icon={<Error className="h-80 w-80" />}
      description={`Estamos tomando un respiro. El servicio no está disponible en este momento. Vuelve en unos minutos.`}
    />
  );
}

export default Error503;
