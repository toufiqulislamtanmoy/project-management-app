
import axios from 'axios';
import { useQuery } from 'react-query';

const useGetTaskList = (projectId) => {
    const { data: tasks = [], isLoading: tasksApiLoading, error, refetch } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            try {
                const response = await axios.get(`http://localhost:3004/tasks?projectId=${projectId}
                `);
                console.log('API Response:', response.data);
                return response.data;
            } catch (error) {
                throw new Error(`Error fetching tasks: ${error.message}`);
            }
        }
    });



    return [tasks, tasksApiLoading, error, refetch];
};

export default useGetTaskList;