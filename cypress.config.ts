import { defineConfig } from "cypress"

export default defineConfig({
  projectId: "n2bekj",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://the-internet.herokuapp.com/",
  },
})
