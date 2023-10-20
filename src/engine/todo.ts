import axios from '../utils';
import {EmptyResponse, CreateTodoRequest, UpdateTodoRequest, ListTodoRequest, ListTodosResponse} from "../model";
import {AxiosResponse} from "axios";

class Todo {
    static delete = (id: string) => {
        return axios.delete<EmptyResponse>(`/v1/todos/${id}`);
    }

    static create = (params: CreateTodoRequest) => {
        return axios.post<EmptyResponse, EmptyResponse, CreateTodoRequest>('/v1/todos', params);
    }

    static update = (id: string, params: UpdateTodoRequest) => {
        return axios.put<EmptyResponse, EmptyResponse, UpdateTodoRequest>(`/v1/todos/${id}`, params);
    }

    static list = (params: ListTodoRequest) => {
        return axios.get<ListTodosResponse, ListTodosResponse>('/v1/todos', {
            params: params
        });
    }
}

export default Todo;