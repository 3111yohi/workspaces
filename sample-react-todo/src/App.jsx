import React from "react";
import { useEffect } from 'react';
import { useState } from 'react';
import "./index.css";

export const App = () => {
    const [todoText, setTodoText] = useState('');
    const [incompleteTodos, setIncompleteTodos] = useState(['あああああ', 'いいいいい']);
    const [completeTodos, setCompleteTodos] = useState(['ああ', 'いいいいい']);

    const onChangeTodoText = (event) => setTodoText(event.target.value);

    const addIncomleteTodos = () => {
        setIncompleteTodos(incompleteTodos.push('ううううううう'));
    }
    return (
        <>
            <div className="input-area">
                <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText}/>
                <button onClick={addIncomleteTodos}>追加</button>
            </div>
            <div className="incomplete-area">
                <p className="title">未完了のTODO</p>
                <ul>
                    {incompleteTodos.map((todo) => {
                        return (
                            <div key={todo} className="list-row">
                                <li>{todo}</li>
                                <button>完了</button>
                                <button>削除</button>
                            </div>
                        );
                    })}
                </ul>
            </div>
            <div className="complete-area">
                <p className="title">完了したTODO</p>
                <ul>
                {completeTodos.map((todo) => {
                        return (
                            <div key={todo} className="list-row">
                                <li>{todo}</li>
                                <button>もどす</button>
                            </div>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}