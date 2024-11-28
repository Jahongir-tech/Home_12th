import { useState } from 'react'

import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Services from './components/services/Services';
import Main from './components/main/Main';
import Footer from "./components/footer/Footer";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Main />
      <Footer />
    </div>
  );
}

export default App
