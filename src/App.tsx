import React from 'react';
import './App.css';
import MainPage from "./components/MainPage";
import ListOfVotes from "./components/VotesPage/ListOfVotes/ListOfVotes";
import VoteDetails from "./components/VotesPage/VoteDetails/VoteDetails";
import 'antd/dist/antd.css'
import VotesPage from "./components/VotesPage/VotesPage";
import ApplicationRoutes from "./components/utils/routes/ApplicationRoutes";

function App() {
  return (
    <div className="App">
        <ApplicationRoutes />
    </div>
  );
}

export default App;
