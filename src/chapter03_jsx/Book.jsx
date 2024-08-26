import React from "react";

function Book(props) {
    return (
        <div>
            <h1>{`책 이름 : ${props.name}`}</h1>
            <h2>{`책 페이지 : ${props.numOfPage} 페이지`}</h2>
        </div>
    );
}

export default Book;