
import useAuthStore from '@/store/useAuthStore';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


const ProtectedRoute = ({ children }) => {
    const router = useRouter();
    const user = useAuthStore((state) => state.user);
    const isLoading = useAuthStore((state) => state.isLoading);

    useEffect(() => {

        if (!isLoading && !user) {
            router.replace('/login');
        }
    }, [isLoading, user, router]);


    return user ? children : null;
};

export default ProtectedRoute;
