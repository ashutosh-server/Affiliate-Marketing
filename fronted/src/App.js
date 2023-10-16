import "./App.css";
import Body from "./pages/Body";
import Faq from "./pages/Faq";
import Marketing from "./pages/Marketing";
import Partners from "./pages/Partners";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
// import Just from "./components/common/just";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Partners />
      <Marketing />
      <Faq />
      {/* <Just/> */}
      <Footer/>
      
    </div>
  );
}

export default App;
