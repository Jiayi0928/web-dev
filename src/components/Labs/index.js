import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import Todo from "./Todo";

const Index = () => {
    return(
        <>
        <h1>Labs</h1>

            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter/home">
                Tuiter
            </Link>


            <Todo/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
        </>
    )
};
export default Index;