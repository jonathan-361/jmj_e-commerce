import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import BrandMascot from "@/assets/Images/brand-mascot.png";
import JMJIcon from "@/components/custom/SVG/JMJIcon";

export default function LoginPage() {
  return (
    /* SCREEN */
    <main className="min-h-screen w-full bg-[#FCE6C4] flex items-center justify-center">
      {/* CENTER WRAPPER */}
      <section className="w-full max-w-5xl px-6">
        {/* LOGIN CARD */}
        <div className="w-full flex rounded-2xl overflow-hidden shadow-2xl bg-white">
          {/* LEFT PANEL */}
          <aside className="hidden md:flex w-1/2 bg-[#F7D9A8] flex-col items-center justify-center p-10">
            <JMJIcon className="w-60 mb-10" />
            <img src={BrandMascot} alt="Brand mascot JMJ" className="w-64" />
          </aside>

          {/* RIGHT PANEL */}
          <article className="w-full md:w-1/2 flex items-center justify-center p-10">
            {/* CONTENT */}
            <div className="w-full max-w-sm">
              <h1 className="text-3xl font-bold text-center text-gray-900">
                Te damos la bienvenida
              </h1>
              <p className="text-center text-gray-700 mb-6">a JMJ Guayaberas</p>

              {/* SOCIAL */}
              <div className="space-y-3 mb-6">
                <Button className="w-full flex justify-center gap-2 bg-black text-white">
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    className="w-5 h-5"
                  />
                  Iniciar con Google
                </Button>

                <Button className="w-full flex justify-center gap-2 bg-black text-white">
                  <img
                    src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                    className="w-5 h-5"
                  />
                  Iniciar con Facebook
                </Button>
              </div>

              {/* DIVIDER */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-1 h-px bg-gray-300" />
                <span className="w-2 h-2 rounded-full bg-gray-400" />
                <div className="flex-1 h-px bg-gray-300" />
              </div>

              {/* FORM */}
              <form className="space-y-4">
                <div>
                  <Label>Correo</Label>
                  <Input placeholder="JMJBussines@gmail.com" />
                </div>

                <div>
                  <Label>Contraseña</Label>
                  <Input type="password" placeholder="********" />
                </div>

                <p className="text-sm text-gray-600">
                  No recuerdas tu contraseña,{" "}
                  <a className="text-blue-600 hover:underline" href="#">
                    haga clic aquí.
                  </a>
                </p>

                <Button className="w-full bg-black text-white">
                  Iniciar sesión
                </Button>
              </form>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
