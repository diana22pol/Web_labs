import React from 'react';
import Header from './containers/Header/Header';
import HeadingPage from './containers/HeadingPage/HeadingPage';
import Cardscontainer from './containers/CardsContainer/Cardscontainer';
import Footer from './containers/Footer/Footer';

function App() {
  return (
    <div>
      <Header/>
      <HeadingPage/>
      <Cardscontainer/>
      <Footer/>
    </div>
  );
}

export default App;
