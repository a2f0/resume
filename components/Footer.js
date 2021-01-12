import holyGrail from '../styles/HolyGrail.module.css'
import packageJson from '../package.json';
const Footer = (props) => (
  <footer className={holyGrail.footer}>
    <div className={holyGrail.flexContainerColumnPageWidth}>
      <div className={holyGrail.leftColumn}>
        <div className={holyGrail.flexContainerLeftAlign}>
          <div className={holyGrail.menuItem}>v{[packageJson.version]}</div>
          <div className={holyGrail.menuItem}>Left 2</div>
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
  </footer>
);
export default Footer;
