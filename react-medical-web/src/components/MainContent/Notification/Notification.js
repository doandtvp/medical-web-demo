import React from 'react';
import './Notification.scss';
import image from '../../../images/content_img.png';
import Button from '../../UI/Button/Button';

function Notification() {
  const handleDownload = () => {};

  return (
    <div className='notification'>
      <div className='notification-content'>
        <div className='content-img'>
          <img src={image} alt='content-img' />
        </div>
        <div className='content-text'>
          <p>Thông báo: Về các biện pháp phòng, chống dịch covid-19</p>
          <p>
            Thông báo: về các biện pháp tăng cường phòng chống dịch COVID-19
            Tình hình dịch bệnh COVID-19 đang diễn biến rất phức tạp trên thế
            giới và trong khu vực. Đặc biệt trong nước tiếp tục ghi nhận những
            ca mắc COVID-19 trong cộng đồng tại Hà Nội, Hồ chí Minh,Hà Nam, Hưng
            Yên
          </p>
          <br />
          <p>
            Thực hiện công điện số 541/CD-TTg ngày 30/04/2021 của thủ tướng
            chính phủ về việc “tăng cường thực hiện, phòng chống dịch COVID-19”,
            Công điện số 04/CĐ-UBND ngày 29/04/2021 “ Về tăng cường thực hiện
            phòng, chống dịch beengj COVID-19 trên địa bàn Thành phố Hà Nội”, để
            đảm bảo an toàn công tác khám và điều trị người bệnh, Giám đốc bệnh
            viện yêu cầu:
          </p>
          <br />
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary.
          </p>
          <br />
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc. Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <div className='download-button'>
            <Button
              type='button'
              value='Tải về'
              className='submit-button'
              onHandleClick={handleDownload}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
