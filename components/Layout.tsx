import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import {ReactNode} from 'react';
import holyGrail from '../styles/HolyGrail.module.css';
import {selectScale} from '../library/resumeConfigSlice';
import styled from 'styled-components';
import {useAppSelector} from '../library/hooks';

interface IProps {
  children: ReactNode;
}

interface IMainColumnProps {
  scale: number;
}

const MainColumn = styled.div<IMainColumnProps>`
  width: calc(var(--main-width) * ${props => props.scale});
  min-height: 100vh;
`;

const Layout = ({children}: IProps) => {
  const scale = useAppSelector(selectScale);
  return (
    <div className={holyGrail.mainContainer}>
      <main className={holyGrail.main}>
        <div className={holyGrail.mainGutterLeft}></div>
        <MainColumn scale={scale}>
          <Header />
          <Body>{children}</Body>
          <Footer />
        </MainColumn>
        <div className={holyGrail.mainGutterRight}></div>
      </main>
    </div>
  );
};

export default Layout;
