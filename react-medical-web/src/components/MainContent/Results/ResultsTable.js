import React from 'react';
import './Results.scss';

function ResultsTable() {
  const tableData = [
    {
      stt: 1,
      sdt: '09 204 567 895',
      name: 'Nguyễn Văn Cừ',
      company: 'Công ty A',
      question: 'Bạn đeo khẩu trang khi làm việc không?',
      status: 'Đã trả lời',
      answer: 'Có',
      opinion: 'Thường Xuyên',
      date: '2021/05/14',
    },
    {
      stt: 2,
      sdt: '09 204 567 895',
      name: 'Nguyễn Văn Đa',
      company: 'Công ty B',
      question: 'Bạn đeo khẩu trang khi làm việc không?',
      status: 'Chưa trả lời',
      answer: 'Không',
      opinion: 'Lúc có lúc không',
      date: '2021/05/14',
    },
    {
      stt: 3,
      sdt: '09 204 567 895',
      name: 'Nguyễn Văn Bằng',
      company: 'Công ty A',
      question: 'Bạn đeo khẩu trang khi làm việc không?',
      status: 'Chưa xem',
      answer: 'Có',
      opinion: 'Lúc có lúc không',
      date: '2021/05/14',
    },
    {
      stt: 4,
      sdt: '09 204 567 895',
      name: 'Nguyễn Văn Đồng',
      company: 'Công ty D',
      question: 'Bạn đeo khẩu trang khi làm việc không?',
      status: 'Đã trả lời',
      answer: 'Không',
      opinion: 'Thiếu oxi',
      date: '2021/05/14',
    },
    {
      stt: 5,
      sdt: '09 204 567 895',
      name: 'Nguyễn Văn Cừ',
      company: 'Công ty A',
      question: 'Bạn đeo khẩu trang khi làm việc không?',
      status: 'Đã trả lời',
      answer: 'Có',
      opinion: 'Thường Xuyên',
      date: '2021/05/14',
    },
    {
      stt: 6,
      sdt: '09 204 567 895',
      name: 'Nguyễn Văn Đa',
      company: 'Công ty B',
      question: 'Bạn đeo khẩu trang khi làm việc không?',
      status: 'Chưa trả lời',
      answer: 'Không',
      opinion: 'Lúc có lúc không',
      date: '2021/05/14',
    },
    {
      stt: 7,
      sdt: '09 204 567 895',
      name: 'Nguyễn Văn Bằng',
      company: 'Công ty A',
      question: 'Bạn đeo khẩu trang khi làm việc không?',
      status: 'Chưa xem',
      answer: 'Có',
      opinion: 'Lúc có lúc không',
      date: '2021/05/14',
    },
    {
      stt: 8,
      sdt: '09 204 567 895',
      name: 'Nguyễn Văn Đồng',
      company: 'Công ty D',
      question: 'Bạn đeo khẩu trang khi làm việc không?',
      status: 'Đã trả lời',
      answer: 'Không',
      opinion: 'Thiếu oxi',
      date: '2021/05/14',
    },
    {
      stt: 9,
      sdt: '09 204 567 895',
      name: 'Nguyễn Văn Cừ',
      company: 'Công ty A',
      question: 'Bạn đeo khẩu trang khi làm việc không?',
      status: 'Đã trả lời',
      answer: 'Có',
      opinion: 'Thường Xuyên',
      date: '2021/05/14',
    },
    {
      stt: 10,
      sdt: '09 204 567 895',
      name: 'Nguyễn Văn Bằng',
      company: 'Công ty A',
      question: 'Bạn đeo khẩu trang khi làm việc không?',
      status: 'Chưa xem',
      answer: 'Có',
      opinion: 'Lúc có lúc không',
      date: '2021/05/14',
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th className='stt'>STT</th>
          <th>Số điện thoại</th>
          <th>Họ và tên</th>
          <th>Công ty</th>
          <th>Câu hỏi</th>
          <th>Trạng thái</th>
          <th>Trả lời</th>
          <th>Ý kiến</th>
          <th>Ngày trả lời</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((data) => (
          <tr key={data.stt}>
            <td className='stt'>{data.stt}</td>
            <td>{data.sdt}</td>
            <td>{data.name}</td>
            <td>{data.company}</td>
            <td>{data.question}</td>
            <td>{data.status}</td>
            <td>{data.answer}</td>
            <td>{data.opinion}</td>
            <td>{data.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ResultsTable;
