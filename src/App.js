import './App.css';
import Calendar from './components/Calendar';
import React from 'react';
import { DateProvider } from './dateContext/DateContext';

function App() {

  return (
    <DateProvider>
        <Calendar />
    </DateProvider>
  );
}

export default App;
