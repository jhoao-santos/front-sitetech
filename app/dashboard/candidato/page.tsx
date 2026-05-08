"use client"

import { JobCard } from "@/components/job-card"
import { Button } from "@/components/ui/button"
import { BriefcaseBusiness, LayoutDashboard, User, Settings, LogOut, Bell, Search } from "lucide-react"
import Link from "next/link"

const myApplications = [
  {
    title: "Senior Frontend Engineer (React)",
    company: "TechNova Solutions",
    location: "São Paulo, SP",
    type: "Híbrido",
    status: "Em Análise",
    postedAt: "2 dias atrás",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=TN"
  },
  {
    title: "Fullstack Developer (Node/React)",
    company: "CloudScale Systems",
    location: "Remoto",
    type: "Tempo Integral",
    status: "Entrevista Marcada",
    postedAt: "Hoje",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=CS"
  }
]

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col bg-muted/20">
      <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="rounded-lg bg-primary p-1.5 text-primary-foreground">
              <BriefcaseBusiness className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold tracking-tight">Vagas<span className="text-primary">Tech</span></span>
          </Link>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Bell className="h-5 w-5" />
            </Button>
            <div className="h-9 w-9 rounded-full border-2 border-primary/20 bg-muted overflow-hidden cursor-pointer hover:scale-110 transition-transform">
              <img src="https://i.pravatar.cc/100?u=1" alt="User" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </nav>
      
      <main className="flex-1 container mx-auto px-4 py-8 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
          {/* Sidebar */}
          <aside className="hidden lg:flex flex-col gap-2">
            <nav className="space-y-1">
              <Link href="/dashboard/candidato" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/20">
                <LayoutDashboard className="h-5 w-5" />
                Dashboard
              </Link>
              <Link href="/dashboard/candidato/vagas" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-background transition-colors text-muted-foreground hover:text-foreground font-medium">
                <BriefcaseBusiness className="h-5 w-5" />
                Minhas Vagas
              </Link>
              <Link href="/dashboard/candidato/perfil" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-background transition-colors text-muted-foreground hover:text-foreground font-medium">
                <User className="h-5 w-5" />
                Meu Perfil
              </Link>
              <Link href="/dashboard/candidato/configuracoes" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-background transition-colors text-muted-foreground hover:text-foreground font-medium">
                <Settings className="h-5 w-5" />
                Configurações
              </Link>
            </nav>
            <div className="mt-auto pt-8 border-t">
              <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-destructive hover:bg-destructive/10 transition-colors font-medium">
                <LogOut className="h-5 w-5" />
                Sair da conta
              </Link>
            </div>
          </aside>

          {/* Content */}
          <div className="space-y-8">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Olá, Desenvolvedor! 👋</h1>
                <p className="text-muted-foreground">Bem-vindo ao seu painel de controle.</p>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Bell className="h-5 w-5" />
                </Button>
                <Button className="rounded-xl font-bold gap-2">
                  <Search className="h-4 w-4" />
                  Buscar novas vagas
                </Button>
              </div>
            </header>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-background border rounded-2xl p-6 shadow-sm">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Candidaturas</p>
                <h3 className="text-4xl font-bold mt-2">12</h3>
                <p className="text-xs text-emerald-500 font-bold mt-2">+2 esta semana</p>
              </div>
              <div className="bg-background border rounded-2xl p-6 shadow-sm">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Entrevistas</p>
                <h3 className="text-4xl font-bold mt-2">3</h3>
                <p className="text-xs text-blue-500 font-bold mt-2">Próxima em 2 dias</p>
              </div>
              <div className="bg-background border rounded-2xl p-6 shadow-sm">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Visualizações</p>
                <h3 className="text-4xl font-bold mt-2">145</h3>
                <p className="text-xs text-muted-foreground font-medium mt-2">Perfil nos últimos 30 dias</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Candidaturas Recentes</h2>
                <Button variant="link" className="text-primary font-bold">Ver todas</Button>
              </div>
              <div className="grid gap-4">
                {myApplications.map((job, i) => (
                  <div key={i} className="bg-background border rounded-2xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all hover:shadow-md">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-xl border bg-muted flex items-center justify-center overflow-hidden">
                        <img src={job.logo} alt={job.company} className="h-full w-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-bold">{job.title}</h4>
                        <p className="text-sm text-muted-foreground">{job.company} • {job.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold ${
                          job.status === "Entrevista Marcada" ? "bg-blue-100 text-blue-700" : "bg-orange-100 text-orange-700"
                        }`}>
                          {job.status}
                        </span>
                        <p className="text-xs text-muted-foreground mt-1">Atualizado {job.postedAt}</p>
                      </div>
                      <Button variant="ghost" size="sm" className="font-bold">Detalhes</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
