"use client"

import React, { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BriefcaseBusiness, ArrowLeft } from "lucide-react"

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.14-4.53z" fill="#EA4335"/>
  </svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

export default function LoginPage() {
  const router = useRouter()
  const [role, setRole] = useState<"candidate" | "company">("candidate")

  const handleLogin = (e?: React.FormEvent) => {
    e?.preventDefault()
    if (role === "company") {
      router.push("/dashboard/empresa")
    } else {
      router.push("/dashboard/candidato")
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
      
      <div className="w-full max-w-md space-y-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <Link href="/" className="mb-8 inline-flex items-center gap-2 group transition-transform hover:scale-105">
            <div className="rounded-xl bg-primary p-2 text-primary-foreground shadow-lg shadow-primary/20">
              <BriefcaseBusiness className="h-8 w-8" />
            </div>
            <span className="text-2xl font-bold tracking-tight">Vagas<span className="text-primary">Tech</span></span>
          </Link>
          <h1 className="text-3xl font-extrabold tracking-tight">Bem-vindo de volta</h1>
          <p className="mt-2 text-muted-foreground">
            Acesse sua conta para gerenciar suas vagas e candidaturas.
          </p>
        </div>

        <div className="rounded-3xl border bg-card p-8 shadow-2xl shadow-primary/5 backdrop-blur-sm relative overflow-hidden">
          <div className="flex p-1 bg-muted rounded-xl gap-1 mb-6">
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

          <div className="grid gap-4">
            <Button 
              variant="outline" 
              className="h-12 rounded-xl font-semibold gap-3 transition-all hover:bg-muted active:scale-95 border-muted-foreground/20 hover:border-primary/50 relative overflow-hidden group/btn"
              onClick={() => handleLogin()}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover/btn:animate-shimmer transition-transform" />
              <GoogleIcon />
              <span className="relative z-10">Entrar com Google</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-12 rounded-xl font-semibold gap-3 transition-all hover:bg-muted active:scale-95"
              onClick={() => handleLogin()}
            >
              <GithubIcon className="h-5 w-5" />
              Entrar com GitHub
            </Button>
          </div>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-3 text-muted-foreground font-medium">
                Ou continue com e-mail
              </span>
            </div>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <Input 
                id="email" 
                type="email" 
                placeholder="nome@exemplo.com" 
                className="h-12 rounded-xl border-muted-foreground/20 focus:border-primary transition-all"
              />
            </div>
            <div className="space-y-2">
              <Input 
                id="password" 
                type="password" 
                placeholder="Sua senha" 
                className="h-12 rounded-xl border-muted-foreground/20 focus:border-primary transition-all"
              />
            </div>
            <Button 
              className="w-full h-12 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              onClick={handleLogin}
            >
              Entrar
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Não tem uma conta?{" "}
            <Link href="/cadastrar" className="font-bold text-primary hover:underline">
              Cadastre-se grátis
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
  );
}
