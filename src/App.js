import './App.css';
import Row from './components/Row';
import requests from './requests'
import Banner from './components/Banner'
import Nav from './components/Nav';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import MovieDetails from './components/MovieDetails';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';

function App() {
  return (
      <Router>
        <div className="App">
            <Nav />
            
              <Switch>
                <Route exact path="/">
                  <Banner />
                  <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} isLargeRow/>
                  <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
                  <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
                  <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
                  <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
                  <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
                  <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} />
                  <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
                </Route>
                <Route exact path="/MovieDetails/:id">
                  <MovieDetails />
                </Route>
                {/* <Route exact path="/ContactForm">
                  <ContactForm />
                </Route> */}
              </Switch>

             <Contact />
           
        </div>
      </Router>
  );
}

export default App;
