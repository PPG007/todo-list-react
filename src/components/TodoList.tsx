import {forwardRef, Fragment, useEffect, useState} from "react";
import {Button, Checkbox, List} from "antd";
import {ListTodoRequest, Todo as TodoModel} from "../model";
import {Todo} from "../engine";
import Item = List.Item;

interface TodoListProps {
    hasBeenDone?: boolean
}

function TodoList({hasBeenDone}: TodoListProps) {
    const [items, setItems] = useState<Array<TodoModel>>([]);
    useEffect(() => {
        loadTodos();
    }, [hasBeenDone]);
    const loadTodos = async () => {
        const req: ListTodoRequest = {
            hasBeenDone: Boolean(hasBeenDone)
        };
        const {items} = await Todo.list(req);
        setItems(items);
    }
    return (
        <Fragment>
            <List
                dataSource={items}
                rowKey={(item) => item.id}
                renderItem={(item) => {
                    return listItemRender({item: item, reload: loadTodos})
                }}
            />
        </Fragment>
    );
}

const listItemRender = ({item, reload}: {item: TodoModel, reload: () => {}}) => {
    return (
        <Item
            actions={[
                <Button
                    danger
                    onClick={async () => {
                        await Todo.delete(item.id);
                        reload()
                    }}
                >
                    删除
                </Button>
            ]}
        >
            <Item.Meta
                title={<span>{item.content}</span>}
                avatar={<Checkbox
                    defaultChecked={item.hasBeenDone}
                    onChange={async (e) => {
                    await Todo.update(item.id, {
                        hasBeenDone: e.target.checked,
                    });
                    reload()
                }}/>}
            />
        </Item>
    )
}

export {TodoList};