import React from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import MainPage from "../../MainPage";
import VotesPage from "../../VotesPage/VotesPage";
import ListOfVotes from "../../VotesPage/ListOfVotes/ListOfVotes";
import AddVote from "../../VotesPage/AddVote/AddVote";
import VoteDetails from "../../VotesPage/VoteDetails/VoteDetails";


const ApplicationRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/votes-page" element={<VotesPage />}>
                <Route index element={<ListOfVotes />} />
                <Route path="add-vote" element={<AddVote />} />
                <Route path="vote-details/:id" element={<VoteDetails />} />
            </Route>
        </Routes>
    )
}

export default ApplicationRoutes;