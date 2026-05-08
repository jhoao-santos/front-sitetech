"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { 
  User, 
  Mail, 
  Github, 
  Linkedin, 
  Globe, 
  Plus, 
  X, 
  Camera, 
  Briefcase, 
  GraduationCap,
  Save,
  ChevronLeft
} from "lucide-react"
import Link from "next/link"

export default function CandidateProfilePage() {
  const [skills, setSkills] = useState(["React", "TypeScript", "Next.js", "Tailwind CSS"])
  const [newSkill, setNewSkill] = useState("")

  const addSkill = (e: React.FormEvent) => {
    e.preventDefault()
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill])
      setNewSkill("")
    }
  }

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(s => s !== skillToRemove))
  }

  return (
    <div className="min-h-screen bg-muted/20 pb-20">
      {/* Header Fixo */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-4">
            <Link href="/dashboard/candidato">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-bold">Meu Perfil Profissional</h1>
          </div>
          <Button className="gap-2 rounded-xl font-bold shadow-lg shadow-primary/20">
            <Save className="h-4 w-4" />
            Salvar Alterações
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:px-6 max-w-5xl">
        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
          
          {/* Coluna Esquerda: Avatar e Links */}
          <aside className="space-y-6">
            <div className="bg-background border rounded-3xl p-8 text-center relative overflow-hidden group shadow-sm">
              <div className="relative inline-block">
                <div className="h-32 w-32 rounded-3xl bg-muted overflow-hidden border-4 border-background shadow-xl">
                  <img src="https://i.pravatar.cc/150?u=1" alt="Profile" className="h-full w-full object-cover" />
                </div>
                <button className="absolute bottom-0 right-0 h-10 w-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95">
                  <Camera className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-4">
                <h2 className="text-xl font-bold">João Silva</h2>
                <p className="text-sm text-muted-foreground font-medium italic">Desenvolvedor Frontend Sênior</p>
              </div>
            </div>

            <div className="bg-background border rounded-3xl p-6 space-y-4 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Redes Sociais</h3>
              <div className="space-y-3">
                <div className="relative">
                  <Linkedin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="linkedin.com/in/usuario" className="pl-10 h-11 rounded-xl bg-muted/30 border-none" />
                </div>
                <div className="relative">
                  <Github className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="github.com/usuario" className="pl-10 h-11 rounded-xl bg-muted/30 border-none" />
                </div>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="meuportfólio.com" className="pl-10 h-11 rounded-xl bg-muted/30 border-none" />
                </div>
              </div>
            </div>
          </aside>

          {/* Coluna Direita: Informações Detalhadas */}
          <div className="space-y-8">
            
            {/* Sobre Mim */}
            <section className="bg-background border rounded-3xl p-8 shadow-sm space-y-6">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold">Sobre Mim</h3>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-bold">Nome Completo</label>
                  <Input defaultValue="João Silva" className="h-12 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold">Título Profissional</label>
                  <Input defaultValue="Desenvolvedor Frontend Sênior" className="h-12 rounded-xl" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold">Bio</label>
                <Textarea 
                  placeholder="Conte um pouco sobre sua carreira e seus objetivos..."
                  className="min-h-[120px] rounded-2xl resize-none"
                  defaultValue="Desenvolvedor com mais de 5 anos de experiência em React e ecossistemas web modernos. Apaixonado por UI/UX e performance."
                />
              </div>
            </section>

            {/* Skills */}
            <section className="bg-background border rounded-3xl p-8 shadow-sm space-y-6">
              <div className="flex items-center gap-2">
                <Plus className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold">Habilidades (Skills)</h3>
              </div>
              <form onSubmit={addSkill} className="flex gap-2">
                <Input 
                  placeholder="Ex: Docker, Python, Figma..." 
                  className="h-12 rounded-xl"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                />
                <Button type="submit" className="h-12 px-6 rounded-xl font-bold">Adicionar</Button>
              </form>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} className="h-9 px-4 rounded-full bg-primary/5 text-primary border-primary/20 text-sm font-bold flex gap-2 items-center group">
                    {skill}
                    <button onClick={() => removeSkill(skill)} className="hover:text-destructive transition-colors">
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </section>

            {/* Experiência */}
            <section className="bg-background border rounded-3xl p-8 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">Experiência Profissional</h3>
                </div>
                <Button variant="outline" className="rounded-xl font-bold gap-2">
                  <Plus className="h-4 w-4" />
                  Adicionar
                </Button>
              </div>
              
              <div className="space-y-6">
                {[1, 2].map((i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl bg-muted/30 relative group">
                    <div className="h-12 w-12 rounded-xl bg-background border flex items-center justify-center shrink-0">
                      <Briefcase className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4 className="font-bold">Desenvolvedor Frontend</h4>
                      <p className="text-sm font-medium">Empresa Tech Exemplo • 2021 - Presente</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Responsável pelo desenvolvimento de interfaces complexas utilizando React e Next.js.
                      </p>
                    </div>
                    <Button variant="ghost" size="icon" className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </section>

            {/* Educação */}
            <section className="bg-background border rounded-3xl p-8 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">Educação</h3>
                </div>
                <Button variant="outline" className="rounded-xl font-bold gap-2">
                  <Plus className="h-4 w-4" />
                  Adicionar
                </Button>
              </div>
              
              <div className="flex gap-4 p-4 rounded-2xl bg-muted/30 relative group">
                <div className="h-12 w-12 rounded-xl bg-background border flex items-center justify-center shrink-0">
                  <GraduationCap className="h-6 w-6 text-muted-foreground" />
                </div>
                <div className="flex-1 space-y-1">
                  <h4 className="font-bold">Ciência da Computação</h4>
                  <p className="text-sm font-medium">Universidade Federal • 2017 - 2021</p>
                </div>
                <Button variant="ghost" size="icon" className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
