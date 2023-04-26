import { writable } from "svelte/store";

function setNav() {
  const { subscribe, set } = writable(null)

  return {
    subscribe,
    home: () => set('home'),
    service: () => set('service'),
    mint: () => set('mint'),
    contact: () => set('contact'),
    about: () => set('about'),
    reset: () => set(null)
  }
}

export const navigation = setNav()

function hideAccordion() {
  const { subscribe, set } = writable(false)

  return {
    subscribe,
    hide: () => set(false),
    default: () => set(true)
  }
}
export const hideAccordionButton = hideAccordion()