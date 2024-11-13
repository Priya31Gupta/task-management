import { create } from 'zustand'

const useTaskStore = create((set) => ({
  list:  [],
  increasePopulation: (newData) => set((state) => ({ list: [...state.list,newData] })),
  removeAllTasks: () => set({ list: [] }),
  updateBears: (task) => set((state) => ({
    list: state.list.map((item) => 
      item.id === task.id? {...task} : item
    )
  })),
  deleteTask: (task) => set((state) => ({
    ...state,
    list: state.list.filter((item) => item.id !== task.id
    )
  })),
  filterList: (updatedList) => set((state) => ({list: [...updatedList]}))
}))

export default useTaskStore;