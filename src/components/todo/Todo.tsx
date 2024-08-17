import React from 'react';
import classes from "./Todo.module.css"
import Button from '../UI/button/Button';

const Todo = () => {
    return (
        <div className={classes.contain_todo}>
            <h3 className={classes.head}>List of tasks</h3>
            <div className={classes.left}>1</div>
            <div className={classes.middle}>2</div>
            <div className={classes.right}>3</div>
            <Button className={classes.button}>Add</Button>
        </div>
    );
};

export default Todo;