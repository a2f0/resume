import {ReactNode} from 'react';
import holyGrail from '../styles/HolyGrail.module.css';

interface IProps {
  children: ReactNode;
}

const Body = ({children}: IProps) => (
  <div className={holyGrail.bodyContainer}>
    <div className={holyGrail.body}>{children}</div>
  </div>
);
export default Body;
