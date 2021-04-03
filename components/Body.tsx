import holyGrail from '../styles/HolyGrail.module.css'
const Body = (props) => (
  <div className={holyGrail.bodyContainer}>
    <div className={holyGrail.body}>
      {props.children}
    </div>
  </div>
);
export default Body;
