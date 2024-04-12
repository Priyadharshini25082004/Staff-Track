import React from 'react'

const Home = () => {

    const handleCLick = () => {
        console.log("Hello");
    }

  return (
    <div>
        <div>Home</div>
        <button onClick={handleCLick}>Click me</button>
    </div>
  )
}

export default Home