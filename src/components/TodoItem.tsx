import React, {Component} from 'react';
import {Space, Card, Checkbox, Col} from 'antd';

import styles from './styles.module.css';
import Todo from "../services/Todo";

interface TodoProp {
    todo: Todo;
}
class TodoItem extends Component<TodoProp> {
    constructor(props: TodoProp){
        super(props)
    }
    render() {
        return (
            <Col className="gutter-ro" span={6} >
                <Card title={this.props.todo.title} className={styles.todoCard}>
                    <p>Description:</p>
                    <p>{this.props.todo.description}</p>
                    <p>Complete? <Checkbox defaultChecked={this.props.todo.complete} disabled/></p>
                </Card>
            </Col>
        );
    }
}

export default TodoItem;
