import styled from 'styled-components';

const Home = () => (
    <Container>
        <h1>Welcome to My Portfolio</h1>
        <p>I am a software developer passionate about creating impactful solutions.</p>
        <button onClick={() => window.location.href = '/projects'}>View My Projects</button>
    </Container>
);

const Container = styled.div`
  text-align: center;
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

export default Home;
