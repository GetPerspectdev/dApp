// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Site
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
interface SiteConfig {
  name: string
  title: string
  emoji: string
  description: string
  localeDefault: string
  links: {
    docs: string
    discord: string
    twitter: string
    github: string
  }
}

export const SITE_CANONICAL = "https://perspect.xyz"

export const siteConfig: SiteConfig = {
  name: "Perspect3",
  title: "Perspect3 | Productivity On-Chain",
  emoji: "⛓",
  description:
    "Real-time insight into developer contributions and rewards for high-performers.",
  localeDefault: "en",
  links: {
    docs: "https:///overview",
    discord: "https://discord.gg/U4jy7Xfh76",
    twitter: "https://twitter.com/district_labs",
    github: "https://github.com/GetPerspectdev/webapp",
  },
}

export const DEPLOY_URL =
  "https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FGetPerspectdev%2Fwebapp&project-name=Perspect&repository-name=turbo-eth&demo-title=Perspect&env=NEXTAUTH_SECRET,DATABASE_URL&envDescription=How%20to%20get%20these%20env%20variables%3A&envLink=https%3A%2F%2Fgithub.com%2FGetPerspectdev%2Fwebapp%2Fblob%2Fintegrations%2F.env.example"
