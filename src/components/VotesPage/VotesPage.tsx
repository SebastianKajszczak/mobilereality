import React, {EventHandler, SyntheticEvent, useState} from 'react'
import { Menu } from 'antd';
import {Link, Outlet} from "react-router-dom";

const { Item } = Menu

const VotesPage = () => {
    const [current, setCurrent] = useState('list');
    
    const handleClick = (e: any) => {
        setCurrent(e.key);
    }
    
    return (
        <>
            <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                <Item key="list">
                    <Link to={'/votes-page'}>Votes list</Link>
                </Item>
                <Item key="addVote">
                    <Link to={'/votes-page/add-vote'}>Add vote</Link>
                </Item>
            </Menu>
            <Outlet />

        </>
    );
}

export default VotesPage;