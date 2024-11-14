import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => (
    <Nav>
        <h1>My Portfolio</h1>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/projects">Projects</Link></li>
        </ul>
    </Nav>
);

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #282c34;
  color: white;
  ul {
    display: flex;
    list-style: none;
    li {
      margin-left: 1.5rem;
      a {
        color: white;
        text-decoration: none;
      }
    }
  }
`;

export default Navbar;
