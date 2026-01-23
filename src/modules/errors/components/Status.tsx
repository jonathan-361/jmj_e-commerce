import type { ReactNode } from "react";
import JMJIcon from "../../../components/custom/JMJIcon";

interface StatusPageProps {
  icon?: ReactNode;
  backgroundColor?: string;
  title?: string;
  description?: string;
}

function StatusPage({
  icon,
  backgroundColor = "#FCE6C4",
  title,
  description,
}: StatusPageProps) {
  return (
    <div className="relative h-screen w-screen" style={{ backgroundColor }}>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 p-4">
        <JMJIcon className="h-30 w-30" />
      </nav>

      {/* Contenido centrado */}
      <div className="flex h-full flex-col items-center justify-center text-center">
        {icon}

        {title && (
          <h1 className="mt-4 text-4xl font-bold text-black">{title}</h1>
        )}

        {description && (
          <p className="mt-2 max-w-md text-lg text-gray-700">{description}</p>
        )}
      </div>
    </div>
  );
}

export default StatusPage;
