import React from 'react'
import {useNavigate} from "react-router-dom";
import api from "../../utils/api";

export const RemoveRow = (id: number) => {
    const navigate = useNavigate();

    const handleRemoveRow = async() => {
        api._delete(`/votes/${id}`).then(() => navigate(`votes-page`, { replace: true}))
    }
}