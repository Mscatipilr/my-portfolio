import styled from 'styled-components';
import projects from '../data/projects';
import ProjectCard from '../components/ProjectCard.jsx';
import SlideIn from 'C:/Users/joann/CTAC/Extended/my-portfolio/src/components/SlideIn/SlideIn.jsx';

const Projects = () => (
    <SlideIn>
    <Container>
        <h1>My Projects</h1>
        <Grid>
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </Grid>
    </Container>
    </SlideIn>
);

const Container = styled.div`
  padding: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); // displays in a row on larger screens and in columns on small screens
  gap: 1rem;
`;

export default Projects;
