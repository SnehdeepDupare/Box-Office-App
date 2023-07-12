import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const NotFound = () => {
  return (
    <MainPageWrapper>
      <div>
        <h1>404</h1>
        <p>Page Not Found!!!</p>
      </div>
      <StyledLink to="/">Return to HomePage</StyledLink>
    </MainPageWrapper>
  );
};

export default NotFound;

const MainPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      font-size: 70px;
      color: ${({ theme }) => theme.mainColors.hotred};
    }
    p {
      font-size: 30px;
      margin-top: 0;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration-color: #fff;
  color: #fff;
  font-size: 20px;
  &:hover {
    text-decoration-color: ${({ theme }) => theme.mainColors.hotred};
    color: ${({ theme }) => theme.mainColors.hotred};
  }
`;
