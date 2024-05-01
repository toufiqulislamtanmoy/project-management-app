import React from 'react';
import { Card } from 'antd';

const TaskItem = ({ task }) => {
    return (
        <Card title={task.title} style={{ marginBottom: '16px' }}>
            <p>{task.description}</p>
            <p>Due Date: {task.dueDate}</p>
            {/* Other task details */}
        </Card>
    );
};

export default TaskItem;
