import Error504Icon from "../../../components/custom/SVG/Error504Icon";
import StatusPage from "../components/Status";

function Error504() {
  return (
    <StatusPage
      icon={<Error504Icon className="h-80 w-auto" />}
      description={`Esto está tardando más de lo normal. La respuesta demoró demasiado. Probemos otra vez.`}
    />
  );
}

export default Error504;
