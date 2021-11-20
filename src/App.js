import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import Menus from './components/menu';
import { ToastContainer} from 'react-bootstrap';
import { Container ,Row,Col} from 'reactstrap';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './components/home';
import Admin from './pages/adminlogin';
import Contact from './components/contact';
import About from './components/about';
import Profile from './components/profile';
import AddEvent from './components/addevent'
import Allevents from './components/allevents';
import LoginPage from './pages/LoginPage';

library.add(fab, faCheckSquare, faCoffee)

function App() {
  return (
    <div>
    <BrowserRouter>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={3} className="">
              <Menus />
            </Col>
            <Col md={9}>
            <Switch>
              <Route path="/" component={Home} exact/>
              {/* <Route path="/events-all" component={{Events events={title:"GDSC",subtitle:"Codeflix 2.0",description:"We are here to help you"}} }exact/> */}
              
              <Route path="/student-login" component={LoginPage} exact/>
              <Route path="/admin-login" component={Admin} exact/>
              <Route path="/add-event" component={AddEvent} exact/>
              <Route path="/view-event" component={Allevents} exact/>
              <Route path="/profile" component={Profile} exact/>
              <Route path="/contact-us" component={Contact} exact/>
              <Route path="/about-us" component={About} exact/>
            </Switch>
            </Col>
          </Row>
        </Container>
    </BrowserRouter>
     {/* <Events events={{ title: "GDSC", subtitle: "Codeflix 2.0", description: "We are here to help you" }}/> */}
     {/* <Allevents/> */}
    <br /><br /><br /><br />
      <Footer style={{ width: 10+ '%',innerHeight:'10px' }}/>
    </div>
  );
}

export default App;
