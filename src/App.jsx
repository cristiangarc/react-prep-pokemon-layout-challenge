import Aside from "./Aside"
import Primary from "./Primary";
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"

import "./App.css"

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="primary-aside">
        <Aside />
        <Primary />
      </div>
      <Footer />
    </div>
  );
};

export default App;
