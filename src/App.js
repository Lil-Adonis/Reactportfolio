import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.scss";
import "./style.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Multipage from "./pages/Multipage";

import About from "./pages/About";
import Services from "./pages/Services";
import Resume from "./pages/Resume";
import Works from "./pages/Works";
import Contact from "./pages/Contact";


import WorkDetails from "./pages/WorkDetails";
import WorkDetails2 from "./pages/WorkDetails2";

//import scrollreveal from "scrollreveal";








function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/multipage" component={Multipage} exact />
        

        {/* For Multipage */}
        <Route path="/multipage" component={Multipage} exact />
        <Route path="/about" component={About} exact />
        <Route path="/services" component={Services} exact />
        <Route path="/resume" component={Resume} exact />
        <Route path="/works" component={Works} exact />
        <Route path="/works/:id/:title" component={WorkDetails} />
        <Route path="/work-details/:id/:title" component={WorkDetails2} />
        <Route path="/contact" component={Contact} exact />

       
      </Switch>
    </BrowserRouter>
  );
}

export default App;
