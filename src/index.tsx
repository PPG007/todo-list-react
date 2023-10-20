import {createRoot} from "react-dom/client";
import TodoApp from "./App";
import {StrictMode} from "react";
import {ConfigProvider, theme} from "antd";

const dom = (
    <StrictMode>
        <ConfigProvider theme={{algorithm: theme.darkAlgorithm, token: {colorPrimary: '#19a7a0'}}}>
            <TodoApp/>
        </ConfigProvider>
    </StrictMode>
);

createRoot(document.getElementById('root')).render(dom);