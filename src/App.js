import React from "react";
// import TodoList from "./TodoList";
import Container from "./Container";
import { ClickCounter } from "./ClickCounter";
import Counter from "./Counter";

const App = () => {

    const onCounterChange = (count) => {
        console.log(`The count is now ${count}`);
    };

    return (
        <Container tittle="To Do List">
            <Counter />
        </Container>
    )
}

export default App ;