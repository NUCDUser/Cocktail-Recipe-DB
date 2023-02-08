import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = (
    <>
    <Header />
    <Body />
    </>
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(app)