import React from 'react'

const header = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return (
        <header>
            <h1>Welcome to React Development</h1>
            <h2>Getting started React</h2>
            <h3>JavaScript Library</h3>
            <p>Ankit Singh</p>
            <small>
                Date:{` ${date}/${month}/${year} ${hours}:${minutes}`}
            </small>
        </header>
    )
}
export default header;