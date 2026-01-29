import { Card } from "@/components/ui/card";
import BrandMascot from "@/assets/Images/brand-mascot.png";
import JMJIcon from "@/components/custom/SVG/JMJIcon";

function LoginPage() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#f8e9dd] px-4">
      <Card className="w-full max-w-6xl rounded-2xl shadow-lg overflow-hidden p-0">
        <div className="grid grid-cols-[35%_65%]">
          {/* Columna izquierda */}
          <div className="bg-[#f6d8ac] p-10 flex flex-col items-center gap-6">
            <JMJIcon className="h-23 w-auto" />
            <img
              src={BrandMascot}
              alt="Brand Mascot"
              className="w-70 max-w-sm"
            />
          </div>

          {/* Columna derecha */}
          <div className="bg-white p-6">{/* contenido derecho */}</div>
        </div>
      </Card>
    </div>
  );
}

export default LoginPage;
