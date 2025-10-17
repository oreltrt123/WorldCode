<div align="center">

<img src="https://codinit.dev/hero-image.webp" alt="CodingIT Banner" width="100%"/>

### AI-Powered Full-Stack Development Platform

**Build production-ready applications using natural language with 50+ AI models**

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](./LICENSE)
[![Version](https://img.shields.io/badge/version-0.2.3-green.svg)](./package.json)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)

[Live Demo](https://codingit.vercel.app) • [Web App Docs](https://docs.codinit.dev) • [Desktop App Docs](https://gerome-elassaad.github.io/codinit-app) • [Report Bug](https://github.com/Gerome-Elassaad/CodingIT/issues) • [Request Feature](https://github.com/Gerome-Elassaad/CodingIT/discussions)

</div>

---

## 🎯 What is CodingIT?

CodingIT is an **open-source AI development platform** that transforms natural language into working applications. Think of it as your AI co-developer that can build, test, and deploy full-stack applications across multiple frameworks.

Unlike traditional AI coding assistants, CodingIT provides:
- **Live Sandbox Execution** - See your code running in real-time with E2B secure containers
- **Multi-Framework Support** - Next.js, Vue, Streamlit, Gradio, and Python data analysis
- **50+ AI Models** - From GPT-5 and Claude 4 to local Ollama models
- **Desktop & Web Apps** - Run locally with Electron or deploy to the cloud
- **Production-Ready Code** - Full authentication, database, and deployment configurations

---

## ✨ Key Features

### 🤖 Comprehensive AI Model Support

**50+ LLM Models** across 10 providers:
- **OpenAI**: GPT-5, GPT-4.5, GPT-4o, o1, o3 series
- **Anthropic**: Claude 4.1 Opus, Claude 3.7/3.5 Sonnet, Haiku
- **Google AI**: Gemini 2.5 Pro/Flash, Gemini 2.0, Gemini 1.5
- **xAI**: Grok 4, Grok 3 (+ Mini/Fast variants)
- **Mistral**: Magistral, Pixtral Large, Codestral
- **Fireworks AI**: Qwen3 Coder 480B, DeepSeek R1, Llama 4
- **Groq**: Ultra-fast inference with Llama 3.3
- **DeepSeek**: DeepSeek V3 reasoning models
- **Together AI**: Open-source model hosting
- **Ollama**: Run models completely offline

### 🛡️ Secure Code Execution

- **E2B Sandboxes**: Isolated, secure containers for code execution
- **Live Preview**: Real-time application rendering with hot reload
- **Package Management**: Install npm and pip packages on-the-fly
- **Multi-Environment**: Python, Node.js, Next.js, Vue, Streamlit, Gradio
- **File System**: Full file tree navigation and editing

### 🎨 Development Environments

| Environment | Description | Use Cases |
|------------|-------------|-----------|
| **Python Data Analyst** | Jupyter-style notebook execution | Data analysis, visualization, ML experiments |
| **Next.js Developer** | Full-stack React with API routes | Web applications, SaaS products |
| **Vue.js Developer** | Vue 3 with Composition API | SPAs, component libraries |
| **Streamlit Developer** | Interactive data apps | Data dashboards, ML demos |
| **Gradio Developer** | ML model interfaces | Model deployment, prototyping |

### 🏗️ Architecture

**Monorepo Structure** - Two applications in one workspace:

```
CodingIT/
├── Web App (@codinit/web)          # Next.js 14 cloud platform
│   ├── Port: 3000
│   ├── Deploy: Vercel
│   ├── Runtime: E2B Cloud Sandboxes
│   └── Database: Supabase PostgreSQL
│
└── Desktop App (@codinit/desktop)  # Electron native application
    ├── Port: 5173
    ├── Deploy: Desktop installers (Mac/Windows/Linux)
    ├── Runtime: WebContainer (in-browser)
    └── Database: Cloudflare D1
```

### 🔐 Enterprise Features

- **Supabase Authentication** - Secure user management with Row Level Security
- **Team Management** - Multi-user workspaces with role-based access
- **Usage Tracking** - Monitor API calls, storage, and execution time
- **Stripe Billing** - Pro ($9/mo) and Enterprise ($25/mo) plans
- **Chat Persistence** - Automatic session storage with search
- **GitHub Integration** - Import repositories directly

---

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org) v18+ and npm
- [pnpm](https://pnpm.io) v10.17+
- [E2B API Key](https://e2b.dev/dashboard) (for code execution)
- AI Provider API Key (OpenAI, Anthropic, etc.)

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/Gerome-Elassaad/CodingIT.git
cd CodingIT
```

**2. Install dependencies**
```bash
pnpm install
```

**3. Configure environment variables**

Create `.env.local` file:

```env
# E2B Code Execution (Required)
E2B_API_KEY=your_e2b_api_key

# Supabase (Required for auth & database)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# AI Providers (Add at least one)
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
GOOGLE_GENERATIVE_AI_API_KEY=AI...
XAI_API_KEY=xai-...
MISTRAL_API_KEY=...
GROQ_API_KEY=gsk_...
FIREWORKS_API_KEY=fw_...
TOGETHER_API_KEY=...
DEEPSEEK_API_KEY=...

# Ollama (Optional - for local models)
OLLAMA_BASE_URL=http://localhost:11434

# Optional Services
STRIPE_SECRET_KEY=sk_...
STRIPE_WEBHOOK_SECRET=whsec_...
UPSTASH_REDIS_REST_URL=https://...
UPSTASH_REDIS_REST_TOKEN=...
```

**4. Set up database**

```bash
# Initialize Supabase tables
npx supabase db push

# Or run migrations manually
psql -h db.your-project.supabase.co -U postgres -f supabase/migrations/*.sql
```

**5. Start development**

**Web App:**
```bash
pnpm dev
# Open http://localhost:3000
```

**Desktop App:**
```bash
pnpm desktop:dev
# Open http://localhost:5173
```

---

## 📦 Technology Stack

### Core Framework
- **Next.js 14** - React framework with App Router & Server Actions
- **TypeScript** - Type-safe development
- **Remix + Electron** - Desktop application framework
- **pnpm Workspaces** - Monorepo package management

### UI/UX
- **shadcn/ui** - Beautiful, accessible component library
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations
- **Radix UI** - Unstyled, accessible primitives
- **Lucide React** - Icon system

### AI & Code Execution
- **Vercel AI SDK** - Streaming AI responses
- **E2B SDK** - Secure code execution sandboxes
- **Monaco Editor** - VS Code-powered code editor
- **Prism** - Syntax highlighting

### Database & Auth
- **Supabase** - PostgreSQL database with RLS
- **Supabase Auth** - User authentication & management
- **Cloudflare D1** - SQLite for desktop app

### Payments & Analytics
- **Stripe** - Subscription billing
- **PostHog** - Product analytics
- **Vercel Analytics** - Performance monitoring

### Infrastructure
- **Vercel** - Web app deployment
- **E2B** - Cloud sandbox execution
- **Upstash** - Rate limiting
- **AWS S3** - File storage (optional)

---

## 🔧 Configuration

### Adding Custom AI Models

Edit `lib/models.json`:

```json
{
  "models": [
    {
      "id": "your-model-id",
      "provider": "Your Provider",
      "providerId": "provider-key",
      "name": "Display Name",
      "multiModal": true
    }
  ]
}
```

Configure provider in `lib/models.ts`:

```typescript
export const providers = {
  'provider-key': {
    id: 'provider-key',
    name: 'Your Provider'
  }
}
```

Add environment variable:
```env
YOUR_PROVIDER_API_KEY=your_key
```

### Adding Custom Sandbox Templates

1. Create template directory:
```bash
cd sandbox-templates
e2b template init your-template
```

2. Configure `e2b.toml`:
```toml
[template]
dockerfile = "Dockerfile"
cmd = "your-start-command"
```

3. Create Dockerfile:
```dockerfile
FROM ubuntu:22.04
RUN apt-get update && apt-get install -y nodejs npm
WORKDIR /home/user
```

4. Deploy template:
```bash
e2b template build
# Output: Template ID: your-template-id
```

5. Register in `lib/templates.json`:
```json
{
  "id": "your-template",
  "name": "Your Template",
  "templateId": "your-template-id",
  "icon": "your-icon.svg"
}
```

---

## 📖 Usage Examples

### Chat with AI to Build Apps

```
You: "Create a Next.js todo app with dark mode and local storage"

CodingIT:
✓ Creates Next.js project structure
✓ Implements todo CRUD operations
✓ Adds dark mode toggle
✓ Configures localStorage persistence
✓ Live preview available at http://localhost:3000
```

### Data Analysis with Python

```
You: "Analyze sales_data.csv and create visualizations"

CodingIT:
✓ Loads pandas & matplotlib
✓ Performs exploratory data analysis
✓ Generates charts and statistics
✓ Outputs interactive plots
```

### Deploy ML Model with Gradio

```
You: "Create a sentiment analysis interface using Gradio"

CodingIT:
✓ Sets up Gradio interface
✓ Loads sentiment model
✓ Creates text input component
✓ Deploys at http://localhost:7860
```

---

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](.github/CONTRIBUTING.md) for guidelines.

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests: `pnpm lint && pnpm build`
5. Commit: `git commit -m 'Add amazing feature'`
6. Push: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Areas We Need Help

- 🐛 Bug fixes and testing
- 📝 Documentation improvements
- 🎨 UI/UX enhancements
- 🌐 Internationalization (i18n)
- 🔌 New LLM provider integrations
- 📦 Additional sandbox templates

---

## 📊 Project Stats

- **Lines of Code**: 50,000+
- **Components**: 40+ React components
- **API Routes**: 25+ endpoints
- **Database Tables**: 24 Supabase tables
- **Supported Models**: 50+ AI models
- **Contributors**: 8 active contributors
- **Stars**: 97+ GitHub stars
- **Deployments**: 221+ production deploys

---

## 📝 Documentation

- **[Complete Documentation](https://docs.codinit.dev)** - Full platform guide
- **[Workspace Guide](./WORKSPACE.md)** - Monorepo architecture & commands
- **[Desktop App Docs](https://gerome-elassaad.github.io/codinit-app)** - Native app features
- **[Changelog](./CHANGELOG.md)** - Version history & updates
- **[Contributing Guide](.github/CONTRIBUTING.md)** - Contribution guidelines

---

## 🔒 Security

- **E2B Sandboxes**: Isolated code execution prevents system access
- **Row Level Security**: Database-level access control
- **API Key Management**: Secure credential storage
- **Rate Limiting**: Prevents abuse with Upstash Redis
- **Input Validation**: Comprehensive sanitization
- **HTTPS Only**: Encrypted connections
- **Webhook Verification**: Stripe signature validation


---

## 📜 License

This project is licensed under the **Apache License 2.0** - see the [LICENSE](./LICENSE) file for details.

---

## 🙏 Acknowledgments

Built with these amazing open-source projects:

- [E2B](https://e2b.dev) - Secure code execution infrastructure
- [Supabase](https://supabase.com) - Open-source Firebase alternative
- [Vercel](https://vercel.com) - Deployment and hosting platform
- [shadcn/ui](https://ui.shadcn.com) - Re-usable component library
- [Vercel AI SDK](https://sdk.vercel.ai) - AI integration framework
- All the AI providers powering intelligent code generation

Special thanks to our contributors and the open-source community!

---

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=Gerome-Elassaad/CodingIT&type=Date)](https://star-history.com/#Gerome-Elassaad/CodingIT&Date)

---

## 📞 Support & Community

- 💬 **Discord**: [Join our community](https://discord.gg/codinit) *(coming soon)*
- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/Gerome-Elassaad/CodingIT/issues)
- 📖 **Documentation**: [docs.codinit.dev](https://docs.codinit.dev)

---

<div align="center">

**Built with ❤️ by the CodingIT Community**

[Website](https://codinit.dev) • [Documentation](https://docs.codinit.dev) • [Desktop App](https://gerome-elassaad.github.io/codinit-app)

⭐ **Star us on GitHub** if you find CodingIT helpful!

</div>
