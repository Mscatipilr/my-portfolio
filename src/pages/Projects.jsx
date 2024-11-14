import styled from 'styled-components';
import projects from '../data/projects';
import ProjectCard from '../components/ProjectCard.jsx';

const Projects = () => (
    <Container>
        <h1>My Projects</h1>
        <Grid>
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </Grid>
    </Container>
);

const Container = styled.div`
  padding: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
`;

export default Projects;
