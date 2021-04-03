
import holyGrail from '../styles/HolyGrail.module.css'
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const Layout = props => (
  <>
    <div className={holyGrail.mainContainer}>
      <main className={holyGrail.main}>
        <div className={holyGrail.mainGutterLeft}></div>
        <div className={holyGrail.mainColumn}>
          <Header />
          <Body>
            {props.children}
          </Body>
          <Footer />
        </div>
        <div className={holyGrail.mainGutterRight}></div>

      </main>
    </div>
  </>
);

export default Layout;
