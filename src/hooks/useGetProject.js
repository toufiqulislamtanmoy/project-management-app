
import axios from 'axios';
import { useQuery } from 'react-query';

const useGetProject = () => {
    const { data: projects = [], isLoading: projectsApiLoading, error, refetch } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            try {
                const response = await axios.get('http://localhost:3004/projects');
                console.log('API Response:', response.data);
                return response.data;
            } catch (error) {
                throw new Error(`Error fetching projects: ${error.message}`);
            }
        }
    });


    console.log(projects)
    return [projects, projectsApiLoading, error, refetch];
};

export default useGetProject;