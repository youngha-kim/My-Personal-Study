// import { ReactElement } from 'react';
import { ReactElement } from 'react';
import { Route, Routes , BrowserRouter as Router } from 'react-router-dom';

import { Calendar } from '../appointments/Calendar';
import { AllStaff } from '../staff/AllStaff';
import { Treatments } from '../treatments/Treatments';
import { Signin } from '../user/Signin';
import { UserProfile } from '../user/UserProfile';
import { Home } from './Home';

export function Routess(): ReactElement {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Staff" element={<AllStaff/>} />
          <Route path="/Calendar" element={<Calendar/>} />
          <Route path="/Treatments" element={<Treatments/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/user/:id" element={<UserProfile/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
      </>
  );
}
