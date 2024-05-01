import create from 'zustand';

const useProjectStore = create((set) => ({
    projects: [],
    setProjects: (newProjects) => set({ projects: newProjects }),
    isLoading: true,
    setLoading: (loading) => set({ isLoading: loading }),
    error: null,
    setError: (error) => set({ error: error }),
}));

export default useProjectStore;
