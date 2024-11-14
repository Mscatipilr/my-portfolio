import styled from 'styled-components';

const About = () => (
    <Container>
        <h1>About Me</h1>
        <p>
            Hi, I&apos;m a full-stack web developer with experience in building scalable web applications.
            I am currently pursuing a Full-Stack Web Development Apprenticeship at Stiegler Ed Tech - CTAC.
        </p>
    </Container>
);

const Container = styled.div`
    padding: 2rem;

    h1 {
        font-size: 2rem;
    }
`;

export default About;
