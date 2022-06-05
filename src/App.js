import Heder from "./components/heder";
import FilterNav from "./components/filterNav";
import ListFixed from "./components/listFixed";
import Footer from "./components/footer";
import Slider from "./components/slider";
import Test from "./components/test";
function App() {
  return (
    <>
      <div className=" overflow-x-hidden">
        <Heder />

        <Slider />
        <FilterNav />
        <Test />
        <ListFixed />

        <Footer />
      </div>
    </>
  );
}

export default App;
