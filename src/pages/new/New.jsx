/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';

import './new.scss';

const New = () => (
  <div className="new">
    <Sidebar />
    <div className="new-container">
      <Navbar />
      <div className="top container">
        <h1>Add New User</h1>
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
            <div className="form-input">
              <label>Username</label>
              <input type="text" placeholder="jane-doe" />
            </div>
            <div className="form-input">
              <label>Full Name</label>
              <input type="text" placeholder="Jane Doe XYZ" />
            </div>
            <div className="form-input">
              <label>Email</label>
              <input type="email" placeholder="Janedoe123@gmail.com" />
            </div>
            <div className="form-input">
              <label>Phone</label>
              <input type="text" placeholder="(+259)-74-1233-4567" />
            </div>
            <div className="form-input">
              <label>Password</label>
              <input type="password" placeholder="Jane-doe" />
            </div>
            <div className="form-input">
              <label>Address</label>
              <input type="text" placeholder="New York, Kolfe Qeranio" />
            </div>
            <div className="form-input">
              <label>Country</label>
              <input type="text" placeholder="Ethchina" />
            </div>
            <button type="button">Send</button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default New;
