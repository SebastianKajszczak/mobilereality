import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import api from '../../utils/api'
import {useNavigate} from "react-router-dom";


interface AddVoteInterface {
    image_id: string;
    sub_id: string;
    value: number
}

const AddVote = () => {

    const navigate = useNavigate();

    const { register, handleSubmit } = useForm<AddVoteInterface>();
    const onSubmit: SubmitHandler<AddVoteInterface> = data => {
        api.post('/votes', data).then(() => navigate(`/votes-page`, { replace: true}))
    };

    return (
        <div className={'test'}>

        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Image Id</label>
            <input {...register("image_id")} defaultValue='asf2' readOnly={true}/>
            <label>Sub Id</label>
            <input {...register("sub_id")} />
            <label>Value</label>
            <input {...register("value")} />
            <input type="submit" />
        </form>

        </div>
    );
}

export default AddVote;