"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BriefcaseBusiness, User, Menu } from "lucide-react"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="rounded-lg bg-primary p-1.5 text-primary-foreground">
            <BriefcaseBusiness className="h-6 w-6" />
          </div>
          <span className="text-xl font-bold tracking-tight">Vagas<span className="text-primary">Tech</span></span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link href="/vagas" className="text-sm font-medium hover:text-primary transition-colors">
            Buscar Vagas
          </Link>
          <Link href="/empresas" className="text-sm font-medium hover:text-primary transition-colors">
            Para Empresas
          </Link>
          <Link href="/sobre" className="text-sm font-medium hover:text-primary transition-colors">
            Sobre Nós
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden sm:flex gap-2">
            <User className="h-4 w-4" />
            Entrar
          </Button>
          <Button size="sm" className="gap-2">
            Cadastrar
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  )
}
