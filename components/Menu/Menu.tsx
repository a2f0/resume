import styled, {css} from 'styled-components';

interface IProps {
  isActive: boolean;
}

export const Menu = styled.div<IProps>`
  background: #ffffff;
  border-radius: 0px;
  position: absolute;
  width: 300px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20px);
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    border-bottom: 1px solid #dddddd;
  }
  li a {
    text-decoration: none;
    color: #333333;
    padding: 15px 20px;
    display: block;
  }
  ${({isActive}) =>
    isActive &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    `}
`;
