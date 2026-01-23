import Error503Icon from "../../../components/custom/SVG/Error503Icon";
import StatusPage from "../components/Status";

function Error503() {
  return (
    <StatusPage
      icon={<Error503Icon className="h-80 w-auto" />}
      description={`Estamos tomando un respiro. El servicio no está disponible en este momento. Vuelve en unos minutos.`}
    />
  );
}

export default Error503;
