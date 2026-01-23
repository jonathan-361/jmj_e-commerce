import Error400Icon from "../../../components/custom/SVG/Error400Icon";
import StatusPage from "../components/Status";

function Error400() {
  return (
    <StatusPage
      icon={<Error400Icon className="h-80 w-80" />}
      description={`Ups… algo no salió como esperábamos.
      La información que enviamos no es válida o está incompleta. Intentemos de nuevo.`}
    />
  );
}

export default Error400;
