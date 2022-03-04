import React, {useEffect, useState} from 'react'
import api from '../../utils/api'
import {Table} from "antd";
import {ListOfVotesColumns} from "./ListOfVotesTable.definition";
import {VoteTypes} from "../VoteDetails/VoteDetails";
import {useNavigate} from "react-router-dom";



const ListOfVotes = () => {
    const [votes, setVotes] = useState<VoteTypes[]>();

    const navigate = useNavigate();

    useEffect(() => {
        api.get('/votes').then((data: VoteTypes[]) => {
            setVotes(data)
        })
    }, [])



    return (
        <Table
            columns={ListOfVotesColumns}
            dataSource={votes}
            onRow={(record) => {
                return {
                    onClick: () => navigate(`vote-details/${record.id}`, { replace: true}), // click row
                };
            }}
        />
    )


}

export default ListOfVotes;