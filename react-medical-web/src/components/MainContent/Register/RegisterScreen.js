import React from 'react';
import './RegisterScreen.scss';
import logo from '../../../images/logo.png';
import Buttons from '../../UI/Buttons/Buttons';
import Input from '../../UI/Input/Input';
import Select from '../../UI/Select/Select';

function RegisterScreen() {
  return (
    <div className='resgister'>
      <img src={logo} alt='logo' />
      <form>
        <p>Thêm mới người sử dụng</p>
        <div className='form-inputs'>
          <Input
            label='Họ tên'
            name='name'
            type='text'
            placeholder='Họ và tên'
          />
          <Input
            label='Số điện thoại'
            name='sdt'
            type='number'
            placeholder='Số điện thoại'
          />
          <Input
            label='Mật khẩu'
            name='password'
            type='password'
            placeholder='Mật khẩu'
          />

          <Input
            label='Nhập lại mật khẩu'
            name='re-password'
            type='password'
            placeholder='Nhập lại mât khẩu'
          />
          <Select
            label='Tổ chức'
            placeholder='Chọn công ty'
            option_1='AHT'
            option_2='FPT'
          />

          <Select
            label='Vai trò'
            placeholder='Chọn chức danh'
            option_1='PM'
            option_2='Team Leader'
          />
        </div>
        <div className='button-group'>
          <Buttons />
        </div>
      </form>
    </div>
  );
}

export default RegisterScreen;
