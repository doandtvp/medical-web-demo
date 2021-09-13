import React from 'react';
import './Results.scss';
import ResultsTable from './ResultsTable';
import { IoIosArrowForward } from 'react-icons/io';

function Results() {
  return (
    <div className='result'>
      <div className='result-table'>
        <p>Kết quả: Khảo sát đợt A</p>
        <ResultsTable />
      </div>
      <div className='pagination'>
        <div className='active'>1</div>
        <div>2</div>
        <div>3</div>
        <div className='next'>
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
}

export default Results;
