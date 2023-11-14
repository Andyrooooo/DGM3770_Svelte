import { SvelteKitAuth } from "@auth/sveltekit"
import GitHub from "@auth/core/providers/github"
// import { GITHUB_ID, GITHUB_SECRET } from "$env/static/private"

// export const handle = SvelteKitAuth({
//   providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })],
// })

import { GITHUB_ID, GITHUB_SECRET, DEV_GITHUB_ID, DEV_GITHUB_SECRET } from "$env/static/private"

export const handle = SvelteKitAuth({
  providers: [
    GitHub({ 
      clientId: process.env.NODE_ENV === 'production' ? DEV_GITHUB_ID : GITHUB_ID, 
      clientSecret: process.env.NODE_ENV === 'production' ? DEV_GITHUB_SECRET : GITHUB_SECRET 
    })
  ],
})