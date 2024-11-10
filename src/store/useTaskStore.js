import { create } from 'zustand'

const useTaskStore = create((set) => ({
  list:  [],
  increasePopulation: (newData) => set((state) => ({ list: [...state.list,newData] })),
  removeAllTasks: () => set({ list: [] }),
  updateBears: (task) => set((state) => ({
    ...state,
    list: state.list.map((item) => 
      item.id === task.id? {...item, isComplete:!item.isComplete} : item
    )
  })),
}))

export default useTaskStore;