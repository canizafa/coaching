import { Form } from "@/components"

export const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="flex flex-row justify-between gap-10">
        <div className="text-center flex flex-col justify-center">
          <p className="text-6xl font-primary">
            Ingresá a trackear tus <br/> <span className="font-bold">actividades!</span>
          </p>
        </div>
          <div className="bg-slate-800 max-h-1/6 min-w-1">
          </div>        
        <div className="min-w-2xl">
          <Form />
        </div>
      </div>
    </div>
  )
}
