import styled from 'styled-components';
import SlideIn from '../components/SlideIn/SlideIn.jsx';
import { CircleGrid } from 'react-awesome-shapes/dist/shapes/circlegrid';

const About = () => (
    
    <SlideIn>
    <Section>
        <Container>
            <h1>About Me</h1>
            <p>
                I&apos;m a full-stack web developer with experience in building scalable web applications through an intensive apprenticeship at Stieglar Ed Tech.
                Currently, I&apos;m pursuing new opportunities to produce valuable products while growing my skills, knowledge, and talent.
                 I also have experience in customer service, sales, administration, and parenting. I draw on this diverse background to lend
                 creativity and a unique perspective to my work as a software developer.
            </p>
        </Container>
    </Section>
    </SlideIn>
    
);

const Section = styled.div`
    display: flex;
    align-items: center; /* Align items vertically */
  justify-content: center; /* Optional: Center everything horizontally */
  width: 800px;
  gap: 2rem; /* Adds space between the container and the image */
`;
const Container = styled.div`
    
    text-align: center;
    padding: 2rem;

    p {
        font-size: 1.5rem;
    }

`;

export default About;
