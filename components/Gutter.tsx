import holyGrail from '../styles/HolyGrail.module.css';
import {selectScale} from '../library/resumeConfigSlice';
import styled from 'styled-components';
import {useAppSelector} from '../library/hooks';

interface IProps {
  scale: number;
}

const StyledDiv = styled.div<IProps>`
  position: sticky;
  top: calc(var(--header-height) * ${props => props.scale});
  flex-grow: 1;
`;

const Layout = () => {
  const scale = useAppSelector(selectScale);
  return (
    <StyledDiv className={holyGrail.mainGutterLeft} scale={scale}></StyledDiv>
  );
};

export default Layout;