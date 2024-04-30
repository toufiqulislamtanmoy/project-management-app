import axios from "axios";
import { useQuery } from "react-query";

const useGetUsers = () => {
    const { data: users = [], isLoading: userApiLoading, error, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            try {
                const response = await axios.get('http://localhost:3004/users');
                console.log('API Response:', response.data);
                return response.data;
            } catch (error) {
                throw new Error(`Error fetching users: ${error.message}`);
            }
        }
    });



    return [users, userApiLoading, error, refetch];
};

export default useGetUsers;