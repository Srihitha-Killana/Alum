import React from 'react';
import Profile from './profile';
import UpcomingEvents from './UpcomingEvents';
import Wof4 from './Wof4';
import Res from './Res';
import Pro from './Pro'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="bg-beige-200 min-h-screen"> {/* Apply beige background */}
        <Routes>
          <Route path="/user-profile" element={<Profile />} />
          <Route path="/upcoming-events" element={<UpcomingEvents />} />
          <Route path="/wof4" element={<Wof4 />} /> 
          <Route path="/res" element={<Res/>}/>
          <Route path="/pro" element={<Pro/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
