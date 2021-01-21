import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/my-navbar/navbar.component"
import Carousel from "./components/my-carusol /Carousel.component"
// import TextTitle from "./components/title-message/textTitle.component"
import MyTitleMessage from "./components/title-message/title-message.component";

const App = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <MyTitleMessage />
    </div>
  )
}

export default App
