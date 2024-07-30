import { create } from "zustand";

export const useStore = create((set) => ({
  counter: 0,
  incrementCounter: () => set((state) => ({ counter: state.counter + 1 })),
  decrementCounter: () => set((state) => ({ counter: state.counter - 1 })),
  clearCounter: () => set({ counter: 0 }),
  updateValue: (newValue) => set({ counter: newValue }),
}));
