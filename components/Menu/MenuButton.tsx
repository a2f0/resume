import styled from 'styled-components';

export const MenuButton = styled.button`
  align-items: center;
  background: #ffffff;
  border: none;
  border-radius: 0px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-weight: 400;
  justify-content: space-between;
  padding: 4px 6px;
  transition: box-shadow 0.4s ease;
  vertical-align: middle;
  margin-left: auto; /* Strictly for positioning */
  &:hover {
    background: #d3d3d3;
  }
  span {
    font-weight: 1000;
    vertical-align: middle;
    font-size: 14px;
    margin: 0 10px;
  }
`;
