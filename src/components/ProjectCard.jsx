import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProjectCard = ({ project }) => (
    <Card>
        <img src={project.image} alt={project.title} />
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div>
            <a href={project.repo} target="_blank" rel="noopener noreferrer">GitHub</a>
            {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
            )}
        </div>
    </Card>
);

// PropTypes validation
ProjectCard.propTypes = {
    project: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        repo: PropTypes.string.isRequired,
        live: PropTypes.string, // Optional
    }).isRequired,
};

const Card = styled.div`
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 1rem;
    text-align: center;
    img {
        width: 100%;
        border-radius: 8px;
    }
    a {
        margin: 0.5rem;
        text-decoration: none;
        color: #007bff;
    }
`;

export default ProjectCard;
