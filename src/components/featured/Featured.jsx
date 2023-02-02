import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import '../../styles/featured.scss';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const Featured = () => (
  <div className="featured container">
    <div className="top">
      <h1 className="title">Total Revenue</h1>
      <MoreVertIcon fontSize="small" />
    </div>
    <div className="bottom">
      <div className="featured-chart">
        <CircularProgressbar value={70} text="70%" strokeWidth={5} />
      </div>
      <p className="title">Total Sales made today</p>
      <p className="amount">$420</p>
      <p className="desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Iste voluptatibus repellendus sunt minus! Nobis, molestiae!
      </p>
      <div className="summary">
        <div className="item">
          <div className="item-title">Last Week</div>
          <div className="item-result positive">
            <KeyboardArrowUpOutlinedIcon fontSize="small" />
            <div className="result-amount">
              $12.4k
            </div>
          </div>
        </div>
        <div className="item">
          <div className="item-title">Last Week</div>
          <div className="item-result negative">
            <KeyboardArrowDownIcon fontSize="small" />
            <div className="result-amount">
              $12.4k
            </div>
          </div>
        </div>
        <div className="item">
          <div className="item-title">Last Month</div>
          <div className="item-result positive">
            <KeyboardArrowUpOutlinedIcon fontSize="small" />
            <div className="result-amount">
              $12.4k
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Featured;
