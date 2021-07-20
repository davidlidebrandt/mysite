import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="bg-image min-h-screen">
        <Home></Home>
      </div>
    <Footer></Footer>
    </div>
  );
}

export default App;
