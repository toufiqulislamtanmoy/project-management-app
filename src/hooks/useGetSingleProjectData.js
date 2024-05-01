
import axios from 'axios';
import { useQuery } from 'react-query';

const useGetSingleProjectData = (projectId) => {
    const { data: project = [], isLoading: projectApiLoading, error, refetch } = useQuery({
        queryKey: ['project'],
        queryFn: async () => {
            try {
                const response = await axios.get(`http://localhost:3004/projects/${projectId}`);
                console.log('API Response:', response.data);
                return response.data;
            } catch (error) {
                throw new Error(`Error fetching project: ${error.message}`);
            }
        }
    });


    console.log(project)
    return [project, projectApiLoading, error, refetch];
};

export default useGetSingleProjectData;