/* import { SvelteKitAuth } from "@auth/sveltekit"
import GitHub from "@auth/core/providers/github"
import { GITHUB_DEV_ID, GITHUB_DEV_SECRET } from "$env/static/private"

export const handle = SvelteKitAuth({
  providers: [GitHub({ clientId: GITHUB_DEV_ID, clientSecret: GITHUB_DEV_SECRET })],
}) */

import { SvelteKitAuth } from "@auth/sveltekit"
import GitHub from "@auth/core/providers/github"

let githubConfig
const devGithubConfig = { clientId: process.env.GITHUB_DEV_ID, clientSecret: process.env.GITHUB_DEV_SECRET}
const prodGithubConfig = { clientId: process.env.GITHUB_PROD_ID, clientSecret: process.env.GITHUB_PROD_SECRET}
process.env.NODE_ENV === 'development' ? githubConfig = devGithubConfig : githubConfig = prodGithubConfig

export const handle = SvelteKitAuth({
  providers: [ 
    GitHub(githubConfig)
  ],
})
