
import ProjectDetails from '@/components/ProjecctDetails/ProjectDetails';

const ProjectDetailsPage = ({ params }) => {
    const { id } = params;
    return (
        <div>
            <ProjectDetails projectId={id} />
        </div>
    );
};

export default ProjectDetailsPage;