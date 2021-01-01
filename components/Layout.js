
import holyGrail from '../styles/HolyGrail.module.css'
import Header from './Header';
import Footer from './Footer';

const Layout = props => (
    <>
        <Header/>
        <div className={holyGrail.mainContainer}>
            <main className={holyGrail.main}>
                <div className={holyGrail.mainGutterLeft}>Content</div>
                <div className={holyGrail.mainBody}>
                    {props.children}
                </div>
                <div className={holyGrail.mainGutterRight}>Content</div>
            </main>
        </div>
        <Footer/>
    </>
);

export default Layout;