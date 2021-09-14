import React from 'react';
import './RegisterScreen.scss';
import logo from '../../../images/logo.png';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import Select from '../../UI/Select/Select';

function RegisterScreen() {
  const companies = ['AHT', 'FPT', 'KSM'];
  const roles = ['PM', 'Team Leader', 'CEO', 'Tester'];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
            options={companies}
          />

          <Select
            label='Vai trò'
            placeholder='Chọn chức danh'
            options={roles}
          />
        </div>
        <div className='button-group'>
          <Button type='reset' value='Xóa' className='clear-button' />
          <Button
            type='submit'
            value='Đăng ký'
            className='submit-button'
            onHandleClick={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
}

export default RegisterScreen;
