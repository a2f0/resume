import styled from 'styled-components';

export const MenuButton = styled.button`
  background: #ffffff;
  border-radius: 90px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  border: none;
  vertical-align: middle;
  transition: box-shadow 0.4s ease;
  margin-left: auto; /* Strictly for positioning */
  &:hover {
    box-shadow: 0 10px 8px rgba(0, 0, 0, 0.3);
  }
  span {
    font-weight: 1000;
    vertical-align: middle;
    font-size: 14px;
    margin: 0 10px;
  }
`;
