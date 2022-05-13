import React, { FC, useState } from 'react';
import './App.css';
import json from './info.json';

type FooterProps = {
  copyright: string;
}

const Footer: React.FC<FooterProps> = (props) => (
  <footer>Footer {props.copyright}</footer>
) 
const Main:FC =  () => {
  return (
      <>
        <strong>My name is {json.firstname}</strong>
        <br />
        <strong>My bio:{json.bio}</strong>
        <br />
        Contact me by: <br />
        <strong>ICQ:{json.contacts.icq}</strong>
        <br />
        <strong>TELEGRAM:{json.contacts.skype}</strong>
      </>
  )
}
const App:FC = () => {
  
  return (
    <div className="App">
    <h1>Hello World!!!</h1>
    <Main />
    <Footer copyright='C'/>
  </div>
  )
}

export default App;
