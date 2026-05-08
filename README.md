# VagasTech - Frontend

Bem-vindo ao repositório do frontend do **VagasTech**, uma plataforma moderna para gestão de cursos, vagas e educação técnica. Este projeto foi desenvolvido com tecnologias de ponta para garantir uma experiência de usuário premium, rápida e responsiva.

## 🚀 Tecnologias Utilizadas

- **Framework:** [Next.js 15+ (App Router)](https://nextjs.org/)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Componentes UI:** [Shadcn UI](https://ui.shadcn.com/)
- **Estado & Formulários:** [TanStack Form](https://tanstack.com/form) / [Zod](https://zod.dev/)
- **Gerenciamento de Estado:** [Zustand](https://github.com/pmndrs/zustand)
- **Animações:** [Framer Motion](https://www.framer.com/motion/) / Lucide React Icons

## 📦 Estrutura do Projeto

```text
c:/front-vagastech/
├── app/                # Rotas e páginas (Next.js App Router)
├── components/         # Componentes reutilizáveis (UI e Business logic)
├── lib/                # Funções utilitárias e configurações de libs
├── public/             # Arquivos estáticos (imagens, ícones, etc.)
├── components.json     # Configuração do Shadcn UI
├── next.config.ts      # Configurações do Next.js
├── package.json        # Dependências e scripts
└── tsconfig.json       # Configuração do TypeScript
```

## 🛠️ Como Iniciar

### Pré-requisitos

Certifique-se de ter o **Node.js (v20+)** e um gerenciador de pacotes instalado (**npm**, **yarn** ou **pnpm**).

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/jhoao-santos/front-sitetech.git
   ```

2. Entre no diretório do projeto:
   ```bash
   cd front-vagastech
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

### Execução em Desenvolvimento

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## 🏗️ Build e Produção

Para gerar a versão de produção:

```bash
npm run build
```

Para iniciar o servidor com o build de produção:

```bash
npm run start
```

## 🎨 Padrões de Design

O projeto segue princípios de design moderno, utilizando:
- **Glassmorphism:** Interfaces com efeitos de transparência e desfoque.
- **Dark Mode:** Suporte nativo para tema escuro.
- **Micro-animações:** Transições suaves para melhorar a interatividade.
- **Responsividade:** Layout adaptável para dispositivos móveis e desktops.

## 🤝 Contribuição

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Comite suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Faça o push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

---

Desenvolvido com ❤️ pela equipe VagasTech.
