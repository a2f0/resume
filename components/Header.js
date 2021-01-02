import Head from "next/head";
import holyGrail from "../styles/HolyGrail.module.css";
import Link from "next/link";

const Header = (props) => (
  <>
    <Head>
      <title>Holy Grail</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header className={holyGrail.header}>
      <div className={holyGrail.flexContainerColumnPageWidth}>
        <div className={holyGrail.leftColumn}>
          <div className={holyGrail.flexContainerLeftAlign}>
            <div className={holyGrail.menuItem}>
              <Link href="/left1">Left 1</Link>
            </div>
            <div className={holyGrail.menuItem}>
              <Link href="/left2">Left 2</Link>
            </div>
          </div>
        </div>
        <div className={holyGrail.centerColumn}>
          <div className={holyGrail.flexContainerCenterAlign}>
            <div className={holyGrail.menuItem}>Middle</div>
          </div>
        </div>
        <div className={holyGrail.rightColumn}>
          <div className={holyGrail.flexContainerRightAlign}>
            <div className={holyGrail.menuItem}>One</div>
            <div className={holyGrail.menuItem}>Two</div>
          </div>
        </div>
      </div>
    </header>
  </>
);

export default Header;
