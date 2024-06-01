import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import data from "./data/Quote";
import Quote_two from "./components/Quote_two";


function App() {
  return (
    <>
      <Navbar />

      {data.map((item, index) => {
      return (<Quote_two quote={item.quote} author={item.author}/>)

      })}
      <Footer />
    </>
  );
}

export default App;
