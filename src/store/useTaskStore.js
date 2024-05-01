import create from 'zustand';

const useTaskStore = create((set) => ({
    tasks: [],
    setTasks: (newTasks) => set({ tasks: newTasks }),
    isLoading: true,
    setLoading: (loading) => set({ isLoading: loading }),
    error: null,
    setError: (error) => set({ error: error }),
}));

export default useTaskStore;
