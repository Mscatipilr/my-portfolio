import styled from 'styled-components';

const Home = () => (
    <Section>
        <Container>
            <h3>Hi</h3>
            <h1>
                I&apos;m <span style={{color: "#4c5e81"}}>Joann</span>
            </h1>

            <h2>a Full-Stack Web Developer</h2>
            <p>passionate about creating impactful solutions.</p>
        </Container>
        <Image src="src/assets/images/Joann Ellis-Headshots-fotor.png" alt="Photograph of Joann"/>
    </Section>

);

const Section = styled.div`
    display: flex;
    align-items: center; /* Align items vertically */
  justify-content: center; /* Optional: Center everything horizontally */
  gap: 2rem; /* Adds space between the container and the image */
`;

const Container = styled.div`
  text-align: left;
  padding: 2rem;
  h1 {
    font-size: 2.5rem;
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
