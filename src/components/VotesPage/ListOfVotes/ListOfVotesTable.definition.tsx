import {Button, Space} from "antd";
import {VoteTypes} from "../VoteDetails/VoteDetails";
import {RemoveRow} from "./RemoveRow";

export const ListOfVotesColumns = [
    {
        title: 'value',
        dataIndex: 'value',
        key: 'value',
    },
    {
        title: 'image_id',
        dataIndex: 'image_id',
        key: 'image_id',
    },
    {
        title: 'created_at',
        dataIndex: 'created_at',
        key: 'created_at',
    },
    {
        title: 'Action',
        key: 'action',
        render: (record: VoteTypes) => (
            <Space size="middle">
                <Button onClick={() => RemoveRow(record.id)}>Delete</Button>
            </Space>
        ),
    },
];