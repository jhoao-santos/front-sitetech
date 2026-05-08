"use client"

import { JobCard } from "@/components/job-card"
import { Button } from "@/components/ui/button"
import { BriefcaseBusiness, LayoutDashboard, Users, Plus, Bell, Search, Settings, LogOut, BarChart3, MessageSquare } from "lucide-react"
import Link from "next/link"

const postedJobs = [
  {
    id: 1,
    title: "Senior Frontend Engineer (React)",
    status: "Ativa",
    candidates: 24,
    newCandidates: 5,
    postedAt: "2 dias atrás"
  },
  {
    id: 2,
    title: "Fullstack Developer (Node/React)",
    status: "Ativa",
    candidates: 18,
    newCandidates: 3,
    postedAt: "1 semana atrás"
  },
  {
    id: 3,
    title: "Product Designer (UI/UX)",
    status: "Pausada",
    candidates: 42,
    newCandidates: 0,
    postedAt: "3 semanas atrás"
  }
]

export default function CompanyDashboardPage() {
  return (
    <div className="flex min-h-screen flex-col bg-muted/20">
      {/* Navbar Logada (Empresa) */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="rounded-lg bg-primary p-1.5 text-primary-foreground">
              <BriefcaseBusiness className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold tracking-tight">Vagas<span className="text-primary">Tech</span> <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full ml-2">EMPRESA</span></span>
          </Link>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full" />
            </Button>
            <div className="h-9 w-9 rounded-full border-2 border-primary/20 bg-muted overflow-hidden cursor-pointer hover:scale-110 transition-transform">
              <img src="https://api.dicebear.com/7.x/initials/svg?seed=TechNova" alt="Empresa" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </nav>
      
      <main className="flex-1 container mx-auto px-4 py-8 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
          {/* Sidebar */}
          <aside className="hidden lg:flex flex-col gap-2">
            <nav className="space-y-1">
              <Link href="/dashboard/empresa" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/20">
                <LayoutDashboard className="h-5 w-5" />
                Painel Geral
              </Link>
              <Link href="/dashboard/empresa/vagas" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-background transition-colors text-muted-foreground hover:text-foreground font-medium">
                <BriefcaseBusiness className="h-5 w-5" />
                Minhas Vagas
              </Link>
              <Link href="/dashboard/empresa/talentos" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-background transition-colors text-muted-foreground hover:text-foreground font-medium">
                <Users className="h-5 w-5" />
                Banco de Talentos
              </Link>
              <Link href="/dashboard/empresa/analises" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-background transition-colors text-muted-foreground hover:text-foreground font-medium">
                <BarChart3 className="h-5 w-5" />
                Análises
              </Link>
              <Link href="/dashboard/empresa/mensagens" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-background transition-colors text-muted-foreground hover:text-foreground font-medium">
                <MessageSquare className="h-5 w-5" />
                Mensagens
              </Link>
            </nav>
            <div className="mt-auto pt-8 border-t">
              <Link href="/dashboard/empresa/configuracoes" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-background transition-colors text-muted-foreground hover:text-foreground font-medium">
                <Settings className="h-5 w-5" />
                Configurações
              </Link>
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
                <h1 className="text-3xl font-bold tracking-tight">Olá, TechNova Solutions! 🏢</h1>
                <p className="text-muted-foreground">Gerencie suas vagas e encontre novos talentos hoje.</p>
              </div>
              <div className="flex items-center gap-3">
                <Button className="rounded-xl font-bold gap-2 bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-500/20">
                  <Plus className="h-5 w-5" />
                  Postar Nova Vaga
                </Button>
              </div>
            </header>

            {/* Quick Stats */}
            <div className="grid gap-6 md:grid-cols-4">
              <div className="bg-background border rounded-2xl p-6 shadow-sm">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Vagas Ativas</p>
                <h3 className="text-4xl font-bold mt-2">5</h3>
              </div>
              <div className="bg-background border rounded-2xl p-6 shadow-sm">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Total Candidatos</p>
                <h3 className="text-4xl font-bold mt-2">128</h3>
                <p className="text-xs text-emerald-500 font-bold mt-2">+12 novos hoje</p>
              </div>
              <div className="bg-background border rounded-2xl p-6 shadow-sm">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Entrevistas</p>
                <h3 className="text-4xl font-bold mt-2">8</h3>
                <p className="text-xs text-blue-500 font-bold mt-2">Esta semana</p>
              </div>
              <div className="bg-background border rounded-2xl p-6 shadow-sm">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Taxa de Match</p>
                <h3 className="text-4xl font-bold mt-2">68%</h3>
                <p className="text-xs text-muted-foreground font-medium mt-2">Perfil ideal</p>
              </div>
            </div>

            {/* My Posted Jobs */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Minhas Vagas Recentes</h2>
                <Button variant="link" className="text-primary font-bold">Ver todas as vagas</Button>
              </div>
              <div className="bg-background border rounded-3xl overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b bg-muted/30">
                      <th className="px-6 py-4 text-sm font-bold text-muted-foreground uppercase tracking-wider">Vaga</th>
                      <th className="px-6 py-4 text-sm font-bold text-muted-foreground uppercase tracking-wider">Status</th>
                      <th className="px-6 py-4 text-sm font-bold text-muted-foreground uppercase tracking-wider text-center">Candidatos</th>
                      <th className="px-6 py-4 text-sm font-bold text-muted-foreground uppercase tracking-wider text-right">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {postedJobs.map((job) => (
                      <tr key={job.id} className="hover:bg-muted/10 transition-colors group">
                        <td className="px-6 py-4">
                          <p className="font-bold group-hover:text-primary transition-colors">{job.title}</p>
                          <p className="text-xs text-muted-foreground">Postada em {job.postedAt}</p>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold ${
                            job.status === "Ativa" ? "bg-emerald-100 text-emerald-700" : "bg-orange-100 text-orange-700"
                          }`}>
                            {job.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <div className="flex flex-col items-center">
                            <span className="font-bold">{job.candidates}</span>
                            {job.newCandidates > 0 && (
                              <span className="text-[10px] text-primary font-bold">+{job.newCandidates} novos</span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="outline" size="sm" className="rounded-lg font-bold">Gerenciar</Button>
                            <Button variant="ghost" size="sm" className="rounded-lg font-bold">Ver Vaga</Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
