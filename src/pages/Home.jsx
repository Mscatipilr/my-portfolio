import styled from 'styled-components';
import SlideIn from '../components/SlideIn/SlideIn.jsx';

const Home = () => (
  <SlideIn>
    <Section>
        <Container>
            <h3>Hi,</h3>
            <h1>
                I&apos;m <span style={{color: "#4c5e81"}}>Joann,</span>
            </h1>

            <h2>a Full-Stack Web Developer</h2>
            <p>passionate about collaborating with others to create meaningful, impactful business solutions.</p>
        </Container>
        <Image src={`${import.meta.env.BASE_URL}assets/images/JoannEllis-Headshots-f.png`} alt="Photograph of Joann" />
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
  text-align: left;
  padding: 2rem;
  
  font-size: 120%;
  h1, h2, h3 {
    line-height: .3;
  }
  p {
    line-height: 1.2;
  }

  button {
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;
const Image = styled.img`
  flex: 1; /* Makes the image take up remaining space */
  max-width: 300px; /* Adjust the image size as needed */
  height: auto; /* Maintain the aspect ratio */

`;

export default Home;
