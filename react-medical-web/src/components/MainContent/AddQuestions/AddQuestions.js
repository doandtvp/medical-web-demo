import React from 'react';
import './AddQuestions.scss';
import Buttons from '../../UI/Buttons/Buttons';

function AddQuestions() {
  return (
    <div className='add-questions'>
      <div className='content'>
        <p>Thêm mới câu hỏi</p>
        <div className='selects'>
          <label>Nhóm câu hỏi</label>
          <br />
          <select>
            <option>Nhóm 1</option>
            <option>Nhóm 2</option>
            <option>Nhóm 3</option>
          </select>
        </div>

        <div className='question-area'>
          <label>Nội dung câu hỏi</label>
          <br />
          <textarea placeholder='Bạn có đeo khẩu trang ở nơi làm việc không?'></textarea>
        </div>

        <div className='radios'>
          <div className='row'>
            <div className='radio-items'>
              <input type='radio' value='Lựa chọn 1' />
              <span>Lựa chọn 1</span>
            </div>

            <div className='radio-items'>
              <input type='radio' value='Lựa chọn 2' />
              <span>Lựa chọn 2</span>
            </div>
          </div>

          <div className='row'>
            <div className='radio-items'>
              <input type='radio' value='Lựa chọn 3' />
              <span>Lựa chọn 3</span>
            </div>

            <div className='radio-items'>
              <input type='radio' value='Lựa chọn 4' />
              <span>Lựa chọn 4</span>
            </div>
          </div>
        </div>

        <div className='upload'>
          <label>Hình ảnh</label>
          <br />
          <div>
            <input
              type='file'
              name='file'
              id='file'
              placeholder='Liên kết'
              className='choosen'
            />
            <label className='select-file' htmlFor='file'>
              Chọn
            </label>
          </div>
        </div>

        <div className='recommendation'>
          <label>Khuyến cáo</label>
          <br />
          <input
            type='text'
            placeholder='Bạn nên đeo khẩu trang trong lúc làm việc'
            readOnly
          />
        </div>

        <div className='button-group'>
          <Buttons />
        </div>
      </div>
    </div>
  );
}

export default AddQuestions;
