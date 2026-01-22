import JMJIcon from "../../../components/custom/JMJIcon";
import Err500 from "../../../components/custom/Error500";

function Error500() {
  return (
    <div className="relative h-screen w-screen bg-[#FCE6C4]">
      {/* Navbar invisible (mismo color que el fondo) */}
      <nav className="absolute top-0 left-0 p-0">
        <JMJIcon className="h-30 w-30" />
      </nav>

      {/* Contenido centrado */}
      <div className="flex h-full flex-col items-center justify-center text-center">
        <Err500 className="h-80 w-80" />
        <h1 className="mt-4 text-4xl font-bold text-black">Error 500</h1>
      </div>
    </div>
  );
}

export default Error500;
