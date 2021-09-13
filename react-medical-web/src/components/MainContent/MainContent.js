import React, { useState, Suspense } from 'react';
import Header from '../Header/Header';
import './MainContent.scss';

const Results = React.lazy(() => import('../MainContent/Results/Results'));

const Notification = React.lazy(() =>
  import('../MainContent/Notification/Notification')
);

const AddQuestions = React.lazy(() =>
  import('../MainContent/AddQuestions/AddQuestions')
);

const RegisterScreen = React.lazy(() =>
  import('../MainContent/Register/RegisterScreen')
);

function MainContent() {
  const [tabs, setTabs] = useState(1);

  const getActiveTabs = (index) => {
    setTabs(index);
  };

  return (
    <div className='main-content'>
      <Header getActiveTabs={getActiveTabs} />
      <Suspense fallback=''>
        <div>
          {tabs === 1 && <Results />}
          {tabs === 2 && <Notification />}
          {tabs === 3 && <AddQuestions />}
          {tabs === 4 && <RegisterScreen />}
        </div>
      </Suspense>
    </div>
  );
}

export default MainContent;
