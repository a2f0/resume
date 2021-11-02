import Body from '../Body';
import Footer from '../Footer';
import Gutter from '../Gutter';
import Header from '../Header';
import MainColumn from './MainColumn';
import {ReactNode} from 'react';
import holyGrail from '../../styles/HolyGrail.module.css';
import {selectScale} from '../../library/resumeConfigSlice';
import {useAppSelector} from '../../library/hooks';

interface IProps {
  children: ReactNode;
}

const Main = ({children}: IProps) => {
  const scale = useAppSelector(selectScale);
  return (
    <div className={holyGrail.mainContainer}>
      <main>
        <Gutter />
        <MainColumn scale={scale}>
          <Header />
          <Body>{children}</Body>
          <Footer />
        </MainColumn>
        <Gutter />
      </main>
    </div>
  );
};

export default Main;
