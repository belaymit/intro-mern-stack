import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import './navbar.scss';

const Navbar = () => (
  <div className="navbar">
    <div className="wrapper">
      <div className="search">
        <input type="text" placeholder="Search..." />
        <SearchOutlinedIcon className="icon" />
      </div>
      <div className="items">
        <div className="item">
          <LanguageOutlinedIcon className="icon" />
          Languages
        </div>
        <div className="item">
          <DarkModeOutlinedIcon className="icon" />
        </div>
        <div className="item">
          <FullscreenExitOutlinedIcon className="icon" />
        </div>
        <div className="item">
          <NotificationsNoneOutlinedIcon className="icon" />
          <div className="counter">2</div>
        </div>
        <div className="item">
          <ChatBubbleOutlineOutlinedIcon className="icon" />
          <div className="counter">5</div>
        </div>
        <div className="item">
          <ListOutlinedIcon className="icon" />
        </div>
        <div className="item">
          <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="user-avatar" className="avatar" />
        </div>
      </div>
    </div>
  </div>
);

export default Navbar;
