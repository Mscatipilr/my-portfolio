import styled from 'styled-components';
import { CircleGrid } from 'react-awesome-shapes/dist/shapes/circlegrid';
const Design = () => (
    <Container>
        <CircleGrid
            position="absolute"
            color="rgb(120, 169, 254)"
            size="175px"
            zIndex={2}
        />
    </Container>
);

const Container = styled.div`

`;

export default Design;