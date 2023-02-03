/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';

import './new.scss';

const New = ({ inputs, title }) => (
  <div className="new">
    <Sidebar />
    <div className="new-container">
      <Navbar />
      <div className="top container">
        <h1>{title}</h1>
      </div>
      <div className="bottom container">
        <div className="left">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrJgwdOAjqaZGS7kn35IVm_ZN6E4XFuJ7V_g&usqp=CAU" alt="img" />
        </div>
        <div className="right">
          <form>
            <div className="form-input">
              <label htmlFor="file">
                Image:
                <DriveFolderUploadOutlinedIcon className="icon" />
              </label>
              <input type="file" id="file" style={{ display: 'none' }} />
            </div>
            {inputs.map((input) => (
              <div className="form-input" key={input.id}>
                <label>{input.label}</label>
                <input type={input.type} placeholder={input.placeholder} />
              </div>
            ))}
            <button type="button">Send</button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

New.propTypes = {
  inputs: PropTypes.arrayOf.isRequired,
  title: PropTypes.string.isRequired,
};

export default New;
