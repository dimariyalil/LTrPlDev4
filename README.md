# 🎯 LilBet Traffic Command Center

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/lilbet-traffic)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/YOUR_USERNAME/lilbet-traffic)

## 📖 Overview

Enterprise-grade traffic management system for online gaming platform supporting 8+ international markets with 15+ traffic channels integration.

## 🚀 Quick Deploy

### Option 1: GitHub Pages (Frontend Only)
1. Fork this repository
2. Go to Settings → Pages
3. Source: Deploy from branch (main)
4. Your app will be at: `https://YOUR_USERNAME.github.io/lilbet-traffic`

### Option 2: Vercel (Full Stack)
1. Click "Deploy with Vercel" button above
2. Connect your GitHub account
3. Add environment variables in Vercel dashboard
4. Your app will be at: `https://lilbet-traffic.vercel.app`

### Option 3: GitHub Codespaces
1. Click "Code" → "Codespaces" → "Create codespace"
2. Wait for environment setup
3. Run `npm run dev`
4. Access via forwarded port

## 🔐 Configuration

### Setting up GitHub Secrets

Go to your repository Settings → Secrets and variables → Actions, then add:

```
TGSTAT_API_KEY=your_actual_key
YOUTUBE_API_KEY=your_actual_key
ANTHROPIC_API_KEY=your_actual_key
DATABASE_URL=your_database_url
REDIS_URL=your_redis_url
JWT_SECRET=random_64_char_string
```

### Environment Variables for Deployment

For Vercel/Netlify, add these in the deployment settings:

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | ✅ |
| `REDIS_URL` | Redis connection string | ✅ |
| `TGSTAT_API_KEY` | TGStat Premium API key | ✅ |
| `YOUTUBE_API_KEY` | YouTube Data API v3 key | ✅ |
| `JWT_SECRET` | JWT signing secret | ✅ |
| `NEXTAUTH_URL` | Your deployment URL | ✅ |

## 🏗️ Project Structure

```
lilbet-traffic/
├── apps/
│   ├── web/                # Next.js frontend
│   └── api/                # Node.js backend
├── packages/
│   ├── database/           # Prisma models
│   ├── ui/                 # Shared UI components
│   └── types/              # TypeScript types
├── .github/
│   ├── workflows/          # GitHub Actions
│   └── dependabot.yml      # Dependency updates
├── docker-compose.yml      # Local development
└── vercel.json            # Vercel configuration
```

## 💻 Development

### Using GitHub Codespaces (Recommended)

1. Open in Codespaces
2. Environment is pre-configured
3. Run development server:
```bash
npm install
npm run dev
```

### Local Development

```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/lilbet-traffic.git
cd lilbet-traffic

# Install dependencies
npm install

# Setup database
npm run db:push

# Start development
npm run dev
```

## 📊 Features

- **Multi-Channel Management**: 15+ traffic sources
- **Real-time Analytics**: WebSocket live updates
- **Partner CRM**: Complete affiliate management
- **API Integrations**: TGStat, YouTube, Facebook, Google
- **Fraud Detection**: ML-based scoring
- **Multi-language**: 8 countries support

## 🌍 Supported Markets

- 🇷🇺 Russia
- 🇰🇿 Kazakhstan
- 🇺🇿 Uzbekistan
- 🇦🇿 Azerbaijan
- 🇪🇬 Egypt
- 🇧🇩 Bangladesh
- 🇵🇰 Pakistan
- 🇧🇹 Bhutan

## 🔌 API Integrations

| Service | Status | Documentation |
|---------|--------|---------------|
| TGStat | ✅ Premium | [Docs](https://tgstat.ru/api) |
| YouTube | ✅ v3 | [Docs](https://developers.google.com/youtube/v3) |
| Facebook | 🔄 Setup required | [Docs](https://developers.facebook.com) |
| Google Ads | 🔄 Setup required | [Docs](https://developers.google.com/google-ads) |

## 📦 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express, GraphQL
- **Database**: PostgreSQL (Supabase/Neon), Redis (Upstash)
- **Deployment**: Vercel, GitHub Pages, Netlify
- **Monitoring**: Vercel Analytics, Sentry

## 🚢 Deployment

### GitHub Actions Workflow

The project includes automatic deployment:

1. Push to `main` branch
2. GitHub Actions runs tests
3. Builds production bundle
4. Deploys to Vercel/Netlify
5. Updates GitHub Pages

### Manual Deployment

```bash
# Build for production
npm run build

# Deploy to Vercel
vercel --prod

# Deploy to Netlify
netlify deploy --prod
```

## 📈 Monitoring

- **Vercel Analytics**: Automatic with Vercel deployment
- **GitHub Insights**: Repository analytics
- **Sentry**: Error tracking (optional)

## 🔒 Security

- All API keys stored in GitHub Secrets
- Environment variables never committed
- HTTPS enforced on all deployments
- JWT authentication
- Rate limiting implemented

## 📝 License

Proprietary - All rights reserved

## 🤝 Support

- Create an issue in GitHub
- Contact: support@lilbet.com

---

**Built with ❤️ for LilBet by Traffic Team**
