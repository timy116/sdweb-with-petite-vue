/// <reference types="vite/client" />
declare module "petite-vue" {
  import { createApp, reactive } from 'petite-vue'
  export {
    createApp,
    reactive
  }
}

declare namespace PetiteVue {
  export * from 'petite-vue'
}
