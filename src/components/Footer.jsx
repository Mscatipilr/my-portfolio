import styled from 'styled-components';

const Footer = () => (
    <FooterContainer>
        <p>© 2024 My Portfolio | Designed with React</p>
    </FooterContainer>
);

const FooterContainer = styled.footer`
  text-align: center;
  padding: 1rem;
  background: #20232a;
  color: white;
`;

export default Footer;
