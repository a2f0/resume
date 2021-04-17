import Head from 'next/head';
import holyGrail from '../styles/HolyGrail.module.css';
import Link from 'next/link';
import ColorInverter from './ColorInverter';
import Color from 'color';
import Rainbow from './Rainbow/Rainbow';
import DropdownMenu from './Menu/DropdownMenu';

const Header = () => {
  const black = Color('black');
  const white = Color('white');

  return (
    <>
      <Head>
        <title>Resume</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={holyGrail.header}>
        <div className={holyGrail.flexContainerColumnPageWidth}>
          <div className={holyGrail.leftColumn}>
            <div className={holyGrail.flexContainerLeftAlign}>
              <DropdownMenu />
            </div>
          </div>
          <div className={holyGrail.centerColumn}>
            <div className={holyGrail.flexContainerCenterAlign}>
              <div className={holyGrail.menuItem}>
                <ColorInverter
                  degrees={135}
                  foreground={black}
                  background={white}
                />
                <Rainbow />
                <ColorInverter
                  degrees={45}
                  foreground={white}
                  background={black}
                />
              </div>
            </div>
          </div>
          <div className={holyGrail.rightColumn}>
            <div className={holyGrail.flexContainerRightAlign}>
              <div className={holyGrail.menuItem}>
                <Link href="/">SVG</Link>
              </div>
              <div className={holyGrail.menuItem}>
                <Link href="/pdf">PDF</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
