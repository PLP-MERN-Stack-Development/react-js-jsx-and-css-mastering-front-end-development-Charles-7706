import { useState, useEffect} from 'react';
import './App.css';

// Import your components here
import Button from './components/Button';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TaskManager from './components/TaskManager';
import APICard from './components/ApiCard';
import { getQuote } from '../api/api'

function App() {
  const [quote, setQuote] = useState(null);

useEffect(() => {
  async function fetchQuote() {
    try {
      const loadQuote = await getQuote();
      setQuote(loadQuote.q);
    } catch (error) {
      console.error(error);
      // Set a visible fallback so the UI doesn't stay in a loading state
      setQuote('Failed to load quote.');
    }
  }

  fetchQuote();
}, []);


  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Navbar component will go here */}
      <Navbar/>

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
          <div className="flex flex-col items-center justify-center"> 
            <TaskManager/>
          </div>
        </div>
        
        {/* API data display will go here */}
        <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
          <APICard quote={quote}/>
        </div>
      </main>

      {/* Footer component will go here */}
      <Footer/>
    </div>
  );
}

export default App; 