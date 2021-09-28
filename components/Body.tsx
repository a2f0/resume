import {ReactNode} from 'react';
import holyGrail from '../styles/HolyGrail.module.css';
import {selectScale} from '../library/resumeConfigSlice';
import styled from 'styled-components';
import {useAppSelector} from '../library/hooks';

interface IProps {
  children: ReactNode;
}

interface IBodyContainerProps {
  scale: number;
}

const BodyContainer = styled.div<IBodyContainerProps>`
  min-height: calc(
    100vh - calc(var(--header-height) * ${props => props.scale}) -
      var(--header-bottom-border) - var(--footer-height)
  );
  display: flex;
  flex-direction: column;
  background-color: #202020;
`;

const Body = ({children}: IProps) => {
  const scale = useAppSelector(selectScale);
  return (
    <BodyContainer scale={scale}>
      <div>{children}</div>
    </BodyContainer>
  );
};
export default Body;
