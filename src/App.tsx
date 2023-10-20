import {Fragment, useState} from "react";
import {Card, Radio} from "antd";
import {TodoList, TodoCreator} from "./components";

function TodoApp({start = 0}: {start?: number}) {
    const [value, setValue] = useState(start);
    const [hasBeenDone, setHasBeenDone] = useState(false);
    return (
        <Fragment>

            <Card title={
                <Radio.Group
                    defaultValue="undo"
                    size="large"
                    onChange={(e) => {
                        setHasBeenDone(e.target.value === 'done');
                    }}
                >
                    <Radio.Button value="undo">未完成</Radio.Button>
                    <Radio.Button value="done">已完成</Radio.Button>
                </Radio.Group>
            }>
                {
                    hasBeenDone ? undefined : (
                        <TodoCreator
                            addHandler={() => {
                                setValue((v) => v+1)
                            }}
                        />
                    )
                }
                <TodoList hasBeenDone={hasBeenDone} key={value}/>
            </Card>
        </Fragment>
    )
}

export default TodoApp;

