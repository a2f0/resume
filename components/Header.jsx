import Head from 'next/head'
import holyGrail from '../styles/HolyGrail.module.css'
import Link from 'next/link'

const Header = (props) => (
  <>
    <Head>
      <title>Resume</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header className={holyGrail.header}>
      <div className={holyGrail.flexContainerColumnPageWidth}>
        <div className={holyGrail.leftColumn}>
          <div className={holyGrail.flexContainerLeftAlign}>
            <div className={holyGrail.menuItem}>
              <Link href="/">SVG</Link>
            </div>
            <div className={holyGrail.menuItem}>
              <Link href="/pdf">PDF</Link>
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