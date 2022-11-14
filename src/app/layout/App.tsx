
import { Container, CssBaseline } from "@mui/material";
import { Route, Switch } from "react-router-dom";
import AboutPage from "../../features/about/AboutPage";
import FunctionsPage from "../../features/functions/FunctionsPage";
import GolfPage from "../../features/golf/GolfPage";
import HomePage from "../../features/home/HomePage";
import MembersPage from "../../features/members/MembersPage";
import ContactPage from '../../features/contact/ContactPage';
import Footer from "./Footer";
import Header from "./Header";
import MiniHeader from "./MiniHeader";
import HomeLinks from "../../features/home/HomeLinks";
import Copyright from "./Copyright";
import './App.css';
import CoursePage from "../../features/course/CoursePage";
import NotFound from "./NotFound";

function App() {
    
    return (
      <>  
        <CssBaseline />
        <Header />
        <MiniHeader/>
        <Container maxWidth={false} disableGutters>
          <Switch>
              {/* exact means to only show if the url is that exact path */}
            <Route exact path='/' component={HomePage} /> 
            <Route exact path='/golf' component={GolfPage} />
            <Route exact path='/members' component={MembersPage} />
            <Route exact path='/functions' component={FunctionsPage} />
            <Route exact path='/course' component={CoursePage} />
            <Route exact path='/about' component={AboutPage} />
            <Route exact path='/contact' component={ContactPage} />
            <Route path='/*'  component={NotFound} />
          </Switch>
        </Container>
        <HomeLinks />
        <Footer />
        <Copyright />
      </>
    );
  }
  
  export default App;