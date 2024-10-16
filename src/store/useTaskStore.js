import { create } from 'zustand'

const useTaskStore = create((set) => ({
  list:  [
    {
        name:'hello-0',
        id:0,
        isCompleted: false,
    },
    {
        name:'hello-1',
        id:1,
        isCompleted: false,
    },
    {
        name:'hello-2',
        id:2,
        isCompleted: false,
    },
    {
        name:'hello-3',
        id:3,
        isCompleted: false,
    },
    {
        name:'hello-4',
        id:4,
        isCompleted: false,
    },

],
  increasePopulation: (newData) => set((state) => ({ list: [...state.list,newData] })),
  removeAllTasks: () => set({ list: [] }),
  updateBears: (newBears) => set({ bears: newBears }),
}))

export default useTaskStore;