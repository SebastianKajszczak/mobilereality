import React, {useEffect, useState} from 'react'
import api from '../../utils/api'
import {Button, Descriptions, Spin} from "antd";
import styled from "styled-components";
import {useNavigate, useParams} from "react-router-dom";

export interface VoteTypes {
    country_code: number;
    created_at: string;
    id: number;
    image_id: string;
    sub_id: string;
    value: number;
}

const VoteDetails = () => {
    const [voteDetails, setVoteDetails] = useState<VoteTypes>();
    const [isLoading, setIsLinished]  = useState<boolean>(true)
    const [error, setError]  = useState<boolean>(false)
    const { id } = useParams();

    const {Item} = Descriptions;
    const navigate = useNavigate();

    const handleDelete = () => {
        api._delete(`/votes/${id}`).then(() => navigate(`/votes-page`, { replace: true}))
    }

    useEffect(() => {
        api.get(`/votes/${id}`).then((data: VoteTypes) => {
            setVoteDetails(data);
            setIsLinished(false);
        }).catch(() => {
            setError(true);
        })
    }, [])

    return (
        <DetailsWrapper>
            {isLoading && <Spin />}
            <Descriptions
                bordered
                title="Vote details"
                extra={<Button onClick={handleDelete} type="primary" danger={true}>Delete</Button>}
            >
                <Item label="Id">{voteDetails?.id}</Item>
                <Item label="Telephone">{voteDetails?.created_at}</Item>
                <Item label="Live">{voteDetails?.sub_id}</Item>
                <Item label="Remark">{voteDetails?.country_code}</Item>
                <Item label="Address">{voteDetails?.value}</Item>
            </Descriptions>
        </DetailsWrapper>
    )


}
const DetailsWrapper = styled.div`
  padding: 50px;
`

export default VoteDetails;