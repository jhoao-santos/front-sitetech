import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { JobCard } from "@/components/job-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Rocket, Building2, Users2, ArrowRight, BriefcaseBusiness } from "lucide-react"

const featuredJobs = [
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
  }
]

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Trending Tech Ticker (Top Ranking) */}
        <div className="w-full bg-primary/5 border-b overflow-hidden py-3">
          <div className="container mx-auto px-4 flex items-center gap-8">
            <div className="flex items-center gap-2 shrink-0">
              <div className="h-2 w-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-primary">Live Ranking</span>
            </div>
            
            <div className="flex items-center gap-12 overflow-x-auto no-scrollbar py-1">
              {[
                { name: "React", score: 98, trend: "up" },
                { name: "Node.js", score: 92, trend: "up" },
                { name: "TypeScript", score: 89, trend: "up" },
              ].map((tech, i) => (
                <div key={tech.name} className="flex items-center gap-3 shrink-0 group">
                  <span className="text-xs font-black text-primary italic">0{i + 1}</span>
                  <span className="text-sm font-bold group-hover:text-primary transition-colors cursor-default">{tech.name}</span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-emerald-100 text-emerald-700">
                    ↑ {tech.score}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(59,130,246,0.1)_0%,rgba(255,255,255,0)_100%)]" />
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="flex flex-col gap-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
                    <Rocket className="mr-2 h-4 w-4" />
                    Plataforma nº 1 de vagas em TI no Brasil
                  </div>
                  <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
                    Sua próxima <span className="text-primary italic">evolução</span> na carreira começa aqui.
                  </h1>
                  <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
                    Conectamos desenvolvedores, designers e especialistas de TI às empresas que estão moldando o futuro digital.
                  </p>
                </div>
                
                <div className="flex flex-col gap-4 sm:flex-row max-w-lg">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input 
                      placeholder="Cargo, tecnologia ou palavra-chave..." 
                      className="pl-10 h-12 rounded-xl"
                    />
                  </div>
                  <Button size="lg" className="h-12 px-8 rounded-xl font-bold shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95">
                    Buscar Vagas
                  </Button>
                </div>

                <div className="flex items-center gap-6 text-sm">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-10 w-10 rounded-full border-2 border-background bg-muted overflow-hidden">
                        <Image src={`https://i.pravatar.cc/100?u=${i}`} alt="User avatar" width={40} height={40} />
                      </div>
                    ))}
                  </div>
                  <p className="text-muted-foreground font-medium">
                    Junte-se a <span className="text-foreground font-bold">50.000+</span> profissionais de TI
                  </p>
                </div>
              </div>
              
              <div className="relative hidden lg:block">
                <div className="relative z-10 overflow-hidden rounded-2xl border bg-background p-2 shadow-2xl transition-transform hover:scale-[1.01]">
                  <Image 
                    src="/hero.png" 
                    alt="VagasTech Workspace" 
                    width={800} 
                    height={600} 
                    className="rounded-xl object-cover aspect-[4/3]"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-muted/30 py-24 border-y">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-3">
              <div className="flex flex-col gap-4 p-6 rounded-2xl bg-background border shadow-sm transition-all hover:shadow-md">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Building2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Para Empresas</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Encontre os melhores talentos de TI com filtros avançados e integração com ferramentas de recrutamento.
                </p>
                <Link href="/empresas" className="mt-2 inline-flex items-center text-sm font-bold text-primary hover:underline group">
                  Postar uma vaga <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              
              <div className="flex flex-col gap-4 p-6 rounded-2xl bg-background border shadow-sm transition-all hover:shadow-md">
                <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                  <Users2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Para Candidatos</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Receba recomendações personalizadas com base no seu stack e conecte-se diretamente com recrutadores.
                </p>
                <Link href="/cadastrar" className="mt-2 inline-flex items-center text-sm font-bold text-primary hover:underline group">
                  Criar meu perfil <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="flex flex-col gap-4 p-6 rounded-2xl bg-background border shadow-sm transition-all hover:shadow-md">
                <div className="h-12 w-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <Rocket className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Salários & Insights</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Acesse dados reais sobre remuneração e tendências do mercado de tecnologia no Brasil.
                </p>
                <Link href="/insights" className="mt-2 inline-flex items-center text-sm font-bold text-primary hover:underline group">
                  Ver tendências <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Jobs */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Vagas em Destaque</h2>
                <p className="text-muted-foreground text-lg">As oportunidades mais recentes e relevantes para o seu perfil.</p>
              </div>
              <Button variant="outline" className="rounded-xl font-bold">Ver todas as vagas</Button>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredJobs.map((job, index) => (
                <JobCard key={index} {...job} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter/CTA */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="rounded-[2.5rem] bg-primary px-8 py-16 text-center text-primary-foreground md:px-16 md:py-24 relative overflow-hidden shadow-2xl shadow-primary/20">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-black/10 blur-3xl" />
              
              <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Não perca a vaga dos seus sonhos.</h2>
                <p className="text-primary-foreground/80 text-lg">
                  Cadastre seu e-mail e receba alertas personalizados para as tecnologias que você domina.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row max-w-md mx-auto">
                  <Input 
                    placeholder="seu@email.com" 
                    className="h-14 rounded-2xl bg-primary-foreground text-foreground px-6 border-none focus-visible:ring-offset-0 focus-visible:ring-2 focus-visible:ring-white/50"
                  />
                  <Button size="lg" variant="secondary" className="h-14 rounded-2xl font-bold px-8 transition-transform hover:scale-105 active:scale-95">
                    Inscrever-se
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <BriefcaseBusiness className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold tracking-tight">Vagas<span className="text-primary">Tech</span></span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-muted-foreground">
              <Link href="#" className="hover:text-primary transition-colors">Privacidade</Link>
              <Link href="#" className="hover:text-primary transition-colors">Termos de Uso</Link>
              <Link href="#" className="hover:text-primary transition-colors">Contato</Link>
              <Link href="#" className="hover:text-primary transition-colors">Vagas por Tecnologia</Link>
            </div>
            
            <p className="text-xs text-muted-foreground">
              © 2026 VagasTech Brasil. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
