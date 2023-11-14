import { SvelteKitAuth } from "@auth/sveltekit"
import GitHub from "@auth/core/providers/github"
import { GITHUB_ID, GITHUB_SECRET } from "$env/static/private"

export const handle = SvelteKitAuth({
  providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })],
})

/* let githubConfig
const devGithubConfig = { clientId: process.env.GITHUB_ID, clientSecret: process.env.GITHUB_SECRET}
const prodGithubConfig = { clientId: process.env.PROD_GITHUB_ID, clientSecret: process.env.PROD_GITHUB_SECRET}
process.env.NODE_ENV === 'development' ? githubConfig = devGithubConfig : githubConfig = prodGithubConfig

export const handle = SvelteKitAuth({
  providers: [
    GitHub(githubConfig)
  ],
}) */