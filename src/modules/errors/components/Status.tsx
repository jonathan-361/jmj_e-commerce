import type { ReactNode } from "react";
import JMJIcon from "../../../components/custom/JMJIcon";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import paths from "@/modules/core/routes/paths/paths";

interface StatusPageProps {
  icon?: ReactNode;
  backgroundColor?: string;
  title?: string;
  description?: string;
}

function StatusPage({
  icon,
  backgroundColor = "#202E4B",
  title,
  description,
}: StatusPageProps) {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-screen" style={{ backgroundColor }}>
      {/* Navbar */}
      <nav className="absolute left-0 top-0 p-4">
        <JMJIcon className="h-30 w-30" />
      </nav>

      {/* Contenido centrado */}
      <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
        {icon}

        {title && (
          <h1 className="text-4xl font-semibold tracking-tight text-white">
            {title}
          </h1>
        )}

        {description && (
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}

        <Button
          size="lg"
          onClick={() => navigate(paths.login)}
          className="mt-4 !bg-[#397bc3] !text-white hover:!bg-[#4aa8f5]"
        >
          Volver al inicio
        </Button>
      </div>
    </div>
  );
}

export default StatusPage;
