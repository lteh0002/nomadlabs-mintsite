import { writable } from "svelte/store";

function setNav() {
  const { subscribe, set } = writable(null)

  return {
    subscribe,
    home: () => set('home'),
    service: () => set('service'),
    mint: () => set('mint'),
    contact: () => set('contact'),
    reset: () => set(null)
  }
}

export const navigation = setNav()