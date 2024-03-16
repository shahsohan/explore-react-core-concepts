import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'


function App() {
  const actors = ['sakib', 'shariful raz', 'jasim', 'rubel', 'Salman Shah'];


  const books = [
    { id: 1, name: 'Physics', price: 100 },
    { id: 2, name: 'math', price: 100 },
    { id: 3, name: 'ict', price: 100 },
    { id: 4, name: 'english', price: 100 },

  ];

  const singers = [
    { id: 1, name: 'Eva Rahman', Age: 35 },
    { id: 2, name: 'Dr. Mahfuzur Rahman', Age: 54 },
    { id: 3, name: 'Shuvro dev', Age: 54 },
    { id: 4, name: 'Pritom Hossain', Age: 29 }
  ];

  return (
    <>
      <h1>Vite + React</h1>
      <BookStore books= {books}></BookStore>
      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }

      <Actor name={"Bappa Raz"}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }
      {/* <Todo
        task="Learn React"
        isDone={true}></Todo>
      <Todo
        task="Core Concept"
        isDone={false}></Todo>
      <Todo
        task="try JSX"
        isDone={true}></Todo> */}


      {/* <Device name="Laptop" price="55"></Device>
      <Device name="Mobile" price="15"></Device>
      <Person></Person>
      <Student></Student>
      <Student grade={12} score="95"></Student>
      <Student grade="4" score="98"></Student>
      <Developer></Developer> */}
    </>
  )
}
function Device(props) {
  console.log(props)
  return <h2>This device: {props.name} price: {props.price}</h2>
}
function Person() {
  const age = 25;
  const money = 20;
  return <h3>I Am a Person with age: {age + money}</h3>
}
const { grade, score } = { grade: '4', score: '98' };

function Student({ grade = 1, score = 0 }) {
  console.log(grade, score);
  return (
    <div className='student'>
      <h3>I am a student</h3>
      <p>Class: {grade}</p>
      <p>score: {score}</p>
    </div>
  )
}

function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '10px',

  }
  return (
    <div style={developerStyle}>
      <h3>Developer section </h3>
    </div>
  )
}

export default App
