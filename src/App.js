import { BrowserRouter as Router ,Route,Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import News from "./Pages/News";
import NewsEntertainment from "./Pages/NewsEntertainment";
import NewsMain from "./Pages/NewsMain";
import NewsSports from "./Pages/NewsSports";
import NewsTechnology from "./Pages/NewsTechnology";

function App() {

  //a730a3ace764491ca71be77ae83f1741
  return (
    <div >
   
  
      <Router>
      <NavBar></NavBar>
      <Routes>
      <Route path='/' element={<NewsMain></NewsMain>}></Route>
      <Route path='/Sports' element={<NewsSports></NewsSports>}></Route>
      <Route path='/Entertainment' element={<NewsEntertainment></NewsEntertainment>}></Route>
      <Route path='/Technology' element={<NewsTechnology></NewsTechnology>}></Route>
      <Route path='/Search' element={<News></News>}></Route>
     </Routes>



      </Router>
     
    </div>
  );
}

export default App;
