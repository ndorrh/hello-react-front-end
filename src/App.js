import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar';
import Greeting from './components/greeting';
import { getMessages } from './redux/messages';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMessages());
  }, [dispatch]);
  const message = useSelector((state) => state.message.messages[0]);
  return (
    <div>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<h2>React and Rails as two separate apps</h2>}
        />
        <Route
          path="/message"
          element={<Greeting prop={message} />}
        />
      </Routes>
    </div>
  );
}

export default App;
