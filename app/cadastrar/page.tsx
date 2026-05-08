"use client"

import React, { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BriefcaseBusiness, ArrowLeft, CheckCircle2 } from "lucide-react"

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.14-4.53z" fill="#EA4335"/>
  </svg>
);

export default function RegisterPage() {
  const router = useRouter()
  const [role, setRole] = useState<"candidate" | "company">("candidate")

  const handleRegister = (e?: React.FormEvent) => {
    e?.preventDefault()
    if (role === "company") {
      router.push("/dashboard/empresa")
    } else {
      router.push("/dashboard/candidato")
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 -ml-32 -mt-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 -mr-32 -mb-32 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl" />
      
      <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="hidden lg:flex flex-col gap-8">
          <Link href="/" className="inline-flex items-center gap-2 group">
            <div className="rounded-xl bg-primary p-2 text-primary-foreground shadow-lg shadow-primary/20">
              <BriefcaseBusiness className="h-8 w-8" />
            </div>
            <span className="text-2xl font-bold tracking-tight">Vagas<span className="text-primary">Tech</span></span>
          </Link>
          
          <div className="space-y-6">
            <h1 className="text-5xl font-extrabold tracking-tight leading-tight">
              {role === "candidate" ? (
                <>Comece sua <span className="text-primary">jornada</span> profissional hoje.</>
              ) : (
                <>Encontre os melhores <span className="text-primary">talentos</span> para seu time.</>
              )}
            </h1>
            <p className="text-xl text-muted-foreground">
              {role === "candidate" 
                ? "Junte-se a milhares de talentos que encontraram o emprego dos sonhos através da nossa plataforma."
                : "A maior rede de profissionais de tecnologia do Brasil à disposição da sua empresa."}
            </p>
            
            <ul className="space-y-4">
              {(role === "candidate" ? [
                "Acesso a vagas exclusivas das maiores techs",
                "Recomendações baseadas no seu stack",
                "Alertas de vagas em tempo real",
                "Perfil otimizado para recrutadores"
              ] : [
                "Publique vagas de forma simples e rápida",
                "Filtros avançados para encontrar o fit perfeito",
                "Dashboard de gestão de candidatos",
                "Página exclusiva da sua empresa"
              ]).map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-medium">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full max-w-md mx-auto space-y-8">
          <div className="lg:hidden flex flex-col items-center text-center">
             <Link href="/" className="mb-8 inline-flex items-center gap-2">
              <div className="rounded-xl bg-primary p-2 text-primary-foreground">
                <BriefcaseBusiness className="h-8 w-8" />
              </div>
              <span className="text-2xl font-bold tracking-tight">Vagas<span className="text-primary">Tech</span></span>
            </Link>
          </div>

          <div className="rounded-3xl border bg-card p-8 shadow-2xl shadow-primary/5 backdrop-blur-sm relative overflow-hidden">
            <div className="mb-8">
              <h2 className="text-3xl font-bold tracking-tight">Criar conta</h2>
              <p className="mt-2 text-muted-foreground">Escolha como deseja utilizar a plataforma.</p>
            </div>

            <div className="grid gap-4">
              <Button 
                variant="outline" 
                className="h-12 rounded-xl font-semibold gap-3 transition-all hover:bg-muted active:scale-95 border-muted-foreground/20 hover:border-primary/50 relative overflow-hidden group/btn"
                onClick={() => handleRegister()}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover/btn:animate-shimmer transition-transform" />
                <GoogleIcon />
                <span className="relative z-10">Cadastrar com Google</span>
              </Button>
            </div>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-3 text-muted-foreground font-medium">
                  Ou use seu e-mail
                </span>
              </div>
            </div>

            <form className="space-y-4" onSubmit={handleRegister}>
              <div className="flex p-1 bg-muted rounded-xl gap-1">
                <button 
                  type="button"
                  onClick={() => setRole("candidate")}
                  className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${
                    role === "candidate" ? "bg-background shadow-sm text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Candidato
                </button>
                <button 
                  type="button"
                  onClick={() => setRole("company")}
                  className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${
                    role === "company" ? "bg-background shadow-sm text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Empresa
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Input placeholder={role === "candidate" ? "Nome" : "Nome do RH"} className="h-12 rounded-xl" required />
                <Input placeholder={role === "candidate" ? "Sobrenome" : "Empresa"} className="h-12 rounded-xl" required />
              </div>
              <Input type="email" placeholder={role === "candidate" ? "seu@email.com" : "email@empresa.com"} className="h-12 rounded-xl" required />
              <Input type="password" placeholder="Sua senha segura" className="h-12 rounded-xl" required />
              <Button 
                type="submit"
                className="w-full h-12 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Criar minha conta
              </Button>
            </form>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              Já tem uma conta?{" "}
              <Link href="/login" className="font-bold text-primary hover:underline">
                Entrar
              </Link>
            </p>
          </div>

          <div className="text-center">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Voltar para o início
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
