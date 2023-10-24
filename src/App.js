import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./screens/Hero";
import Products from "./screens/Products";
import TopPicks from "./screens/TopPicks";

function App() {
  return (
    <div>
      <Hero/>
      <TopPicks/>
      <Products/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
