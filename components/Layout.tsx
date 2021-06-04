import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import {ReactNode} from 'react';
import holyGrail from '../styles/HolyGrail.module.css';

interface IProps {
  children: ReactNode;
}

const Layout = ({children}: IProps) => (
  <>
    <div className={holyGrail.mainContainer}>
      <main className={holyGrail.main}>
        <div className={holyGrail.mainGutterLeft}></div>
        <div className={holyGrail.mainColumn}>
          <Header />
          <Body>{children}</Body>
          <Footer />
        </div>
        <div className={holyGrail.mainGutterRight}></div>
      </main>
    </div>
  </>
);

export default Layout;
