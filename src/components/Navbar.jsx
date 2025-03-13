import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => (
    <Nav>
        <h1>JOANN</h1>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/projects">Projects</Link></li>
        </ul>
    </Nav>
);

const Nav = styled.nav`
    position: fixed; /* Keeps the navbar fixed at the top */
    top: 0; /* Positions the navbar at the top */
    left: 0; /* Aligns the navbar to the left */
    width: 100%; /* Spreads the navbar across the entire width */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: #282c34;
    color: white;
    z-index: 1000; /* Ensures the navbar appears above other content */
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2); /* Optional: Adds a subtle shadow for depth */
    

    ul {
        display: flex;
        list-style: none;
        
        margin: 0; /* Removes default margin for the list */
        padding-right: 70px; /* Removes default padding for the list */

        li {
            margin-left: 1.5rem;

            a {
                color: white;
                text-decoration: none;
                transition: color 0.3s;

                &:hover {
                    color:rgb(120, 169, 254); /* Changes color on hover */
                }
            }
        }
    }

    h1 {
        margin: 0; /* Removes default margin from the heading */
        font-size: 1.5rem; /* Adjust the size of the title */
    }
`;

export default Navbar;
