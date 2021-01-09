
import holyGrail from "../styles/HolyGrail.module.css";
import Header from "./Header";
import Footer from "./Footer";

const Layout = props => (
  <>
    <Header/>
    <div className={holyGrail.mainContainer}>
      <main className={holyGrail.main}>
        <div className={holyGrail.mainGutterLeft}></div>
        <div className={holyGrail.mainBody}>
          {props.children}
        </div>
        <div className={holyGrail.mainGutterRight}></div>
      </main>
    </div>
    <Footer/>
  </>
);

export default Layout;
