import {Fragment, useState} from "react";
import {Input} from "antd";
import {Todo} from "../engine";

interface TodoCreatorProps {
    addHandler: () => void,
}

function TodoCreator({addHandler}: TodoCreatorProps) {
    const [value, setValue] = useState('');
    return (
        <Fragment>
            <Input
                value={value}
                onChange={(e) => {setValue(e.target.value)}}
                onPressEnter={async (e) => {
                    if (value !== '') {
                        await Todo.create({
                            content: value,
                        });
                        addHandler();
                        setValue('');
                    }
                }}
            />
        </Fragment>
    )
}

export {TodoCreator};