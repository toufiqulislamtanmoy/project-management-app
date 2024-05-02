import { create } from "zustand";

const useAuthStore = create((set) => {
    let initialUser

    if (typeof window !== 'undefined') {
        const storedUser = localStorage.getItem("user");
        initialUser = storedUser ? JSON.parse(storedUser) : null;
    }

    return {
        user: initialUser,
        isLoading: false,
        login: async (userData) => {
            try {
                set({ isLoading: true });
                if (typeof window !== 'undefined') {

                    localStorage.setItem("user", JSON.stringify(userData));
                    set({ user: userData, isLoading: false });

                }

            } catch (error) {
                console.error("Login failed:", error);
                set({ isLoading: false });
            }
        },
        logout: async () => {
            try {
                set({ isLoading: true });
                localStorage.removeItem("user");
                set({ user: null, isLoading: false });
            } catch (error) {
                console.error("Logout failed:", error);
                set({ isLoading: false });
            }
        },
    };
});

export default useAuthStore;
