import styled from 'styled-components';

const Footer = () => (
    <FooterContainer>
        <small>© 2024 My Portfolio | Designed with React</small>
    </FooterContainer>
);

const FooterContainer = styled.footer`
  text-align: center;
  padding: 1rem;
  color: #20232a;
`;

export default Footer;
