"use client"

import React, { useState } from "react"
import { Navbar } from "@/components/navbar"
import { JobCard } from "@/components/job-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Filter, SlidersHorizontal, ChevronDown, Check } from "lucide-react"

const allJobs = [
  {
    title: "Senior Frontend Engineer (React)",
    company: "TechNova Solutions",
    location: "São Paulo, SP (Híbrido)",
    type: "Tempo Integral",
    salary: "R$ 15k - R$ 22k",
    postedAt: "2 dias atrás",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=TN"
  },
  {
    title: "Fullstack Developer (Node/React)",
    company: "CloudScale Systems",
    location: "Remoto",
    type: "Tempo Integral",
    salary: "R$ 12k - R$ 18k",
    postedAt: "Hoje",
    tags: ["Node.js", "PostgreSQL", "Docker", "AWS"],
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=CS"
  },
  {
    title: "Especialista em Cibersegurança",
    company: "SecureLink",
    location: "Rio de Janeiro, RJ",
    type: "Tempo Integral",
    salary: "R$ 18k - R$ 25k",
    postedAt: "1 semana atrás",
    tags: ["Security", "Python", "Linux", "SOC"],
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=SL"
  },
  {
    title: "Product Designer (UI/UX)",
    company: "CreativeFlow",
    location: "São Paulo, SP",
    type: "Híbrido",
    salary: "R$ 10k - R$ 16k",
    postedAt: "3 dias atrás",
    tags: ["Figma", "Design Systems", "UI Design"],
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=CF"
  },
  {
    title: "DevOps Engineer",
    company: "InfraGenius",
    location: "Remoto",
    type: "PJ",
    salary: "R$ 14k - R$ 20k",
    postedAt: "5 dias atrás",
    tags: ["Kubernetes", "Terraform", "CI/CD"],
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=IG"
  },
  {
    title: "Mobile Developer (Flutter)",
    company: "AppMaster",
    location: "Belo Horizonte, MG",
    type: "Tempo Integral",
    salary: "R$ 11k - R$ 17k",
    postedAt: "4 dias atrás",
    tags: ["Flutter", "Dart", "Firebase"],
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=AM"
  }
]

export default function JobsPage() {
  const [activeFilters, setActiveFilters] = useState(["Todos"])

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Search Header */}
        <section className="bg-primary/5 border-b py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-6 text-center">
              <h1 className="text-4xl font-extrabold tracking-tight">
                Encontre sua próxima <span className="text-primary italic">oportunidade</span>
              </h1>
              <div className="flex flex-col md:flex-row gap-3 bg-background p-2 rounded-2xl border shadow-xl shadow-primary/5">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input 
                    placeholder="Cargo, tecnologia ou empresa..." 
                    className="pl-10 h-12 border-none bg-transparent focus-visible:ring-0 text-base"
                  />
                </div>
                <div className="w-px bg-border hidden md:block" />
                <div className="relative flex-1">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input 
                    placeholder="Cidade ou remoto..." 
                    className="pl-10 h-12 border-none bg-transparent focus-visible:ring-0 text-base"
                  />
                </div>
                <Button size="lg" className="h-12 px-8 rounded-xl font-bold shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95">
                  Buscar Vagas
                </Button>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Buscas populares:</span>
                {["React", "Node.js", "Java", "Python", "TypeScript"].map((tag) => (
                  <button key={tag} className="hover:text-primary transition-colors hover:underline">
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
              {/* Filters Sidebar */}
              <aside className="hidden lg:flex flex-col gap-8 sticky top-28 self-start">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Filtros
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label className="text-sm font-bold mb-3 block">Modelo de Trabalho</label>
                      <div className="space-y-2">
                        {["Remoto", "Híbrido", "Presencial"].map((item) => (
                          <label key={item} className="flex items-center gap-2 cursor-pointer group">
                            <div className="h-4 w-4 rounded border border-muted-foreground/30 flex items-center justify-center group-hover:border-primary transition-colors">
                              <Check className="h-3 w-3 text-primary opacity-0" />
                            </div>
                            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{item}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-bold mb-3 block">Tipo de Contrato</label>
                      <div className="space-y-2">
                        {["CLT", "PJ", "Temporário", "Estágio"].map((item) => (
                          <label key={item} className="flex items-center gap-2 cursor-pointer group">
                            <div className="h-4 w-4 rounded border border-muted-foreground/30 flex items-center justify-center group-hover:border-primary transition-colors">
                              <Check className="h-3 w-3 text-primary opacity-0" />
                            </div>
                            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{item}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-bold mb-3 block">Experiência</label>
                      <div className="space-y-2">
                        {["Júnior", "Pleno", "Sênior", "Especialista"].map((item) => (
                          <label key={item} className="flex items-center gap-2 cursor-pointer group">
                            <div className="h-4 w-4 rounded border border-muted-foreground/30 flex items-center justify-center group-hover:border-primary transition-colors">
                              <Check className="h-3 w-3 text-primary opacity-0" />
                            </div>
                            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{item}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-bold mb-3 block">Faixa Salarial (R$)</label>
                      <div className="space-y-2">
                        {["0 - 5k", "5k - 10k", "10k - 15k", "15k+"].map((item) => (
                          <label key={item} className="flex items-center gap-2 cursor-pointer group">
                            <div className="h-4 w-4 rounded border border-muted-foreground/30 flex items-center justify-center group-hover:border-primary transition-colors">
                              <Check className="h-3 w-3 text-primary opacity-0" />
                            </div>
                            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{item}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full rounded-xl font-bold">Limpar Filtros</Button>
              </aside>

              {/* Main Content */}
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                  <p className="text-muted-foreground font-medium italic">
                    Mostrando <span className="text-foreground font-bold">{allJobs.length}</span> vagas encontradas
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground font-medium shrink-0">Ordenar por:</span>
                    <Button variant="outline" size="sm" className="rounded-xl gap-2 font-bold">
                      Mais Recentes <ChevronDown className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="lg:hidden rounded-xl">
                      <SlidersHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
                  {allJobs.map((job, index) => (
                    <JobCard key={index} {...job} />
                  ))}
                </div>

                <div className="flex justify-center pt-12">
                  <Button variant="outline" size="lg" className="rounded-2xl px-12 font-bold hover:bg-primary hover:text-primary-foreground transition-all">
                    Carregar mais vagas
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Newsletter Section */}
      <section className="bg-muted/30 py-24 border-t">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tight">Quer receber vagas personalizadas?</h2>
            <p className="text-muted-foreground text-lg">
              Deixe seu e-mail e enviaremos as melhores oportunidades direto no seu inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input placeholder="seu@email.com" className="h-14 rounded-2xl bg-background shadow-sm" />
              <Button size="lg" className="h-14 rounded-2xl font-bold px-8">Ativar Alertas</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
