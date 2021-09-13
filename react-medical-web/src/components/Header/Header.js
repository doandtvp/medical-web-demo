import React, { useState } from 'react';
import './Header.scss';
import logo from '../../images/header-logo.png';
import { FiSearch, FiUser } from 'react-icons/fi';

function Header(props) {
  const [active, setActive] = useState(1);

  const addActiveClass = (index) => {
    setActive(index);
    props.getActiveTabs(index);
  };

  return (
    <div className='header'>
      <div className='header-content'>
        <img src={logo} alt='logo' />
        <div className='search'>
          <input type='text' placeholder='Tìm kiếm...' />
          <i>
            <FiSearch />
          </i>
        </div>
        <ul className='menu'>
          <li
            onClick={() => addActiveClass(1)}
            className={active === 1 ? 'active' : ''}
          >
            <a href='#tt'>Tin tức</a>
          </li>
          <li
            onClick={() => addActiveClass(2)}
            className={active === 2 ? 'active' : ''}
          >
            <a href='#vb'>Văn bản</a>
          </li>
          <li
            onClick={() => addActiveClass(3)}
            className={active === 3 ? 'active' : ''}
          >
            <a href='#mh'>Mô hình</a>
          </li>
          <li
            onClick={() => addActiveClass(4)}
            className={active === 4 ? 'active' : ''}
          >
            <a href='#ql'>Quản lý</a>
          </li>
        </ul>
        <div className='admin'>
          <div className='admin-avt'>
            <FiUser />
          </div>
          <p>Admin</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
