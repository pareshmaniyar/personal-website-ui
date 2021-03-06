import React, { Suspense, lazy } from 'react';
import {
    Switch,
    Route,
    HashRouter as Router,
    Link,
    Redirect
} from 'react-router-dom';
import './app.css';
// const Home = lazy(() => import('./pages/home'));
// const Blog = lazy(() => import('./pages/blog'));
import Home from './pages/home';
import Blog from './pages/blog';
import NavBar from './components/navbar.js';
import Footer from './components/footer.js';

class App extends React.Component {
    render(){
        return (
            <div className="app">
                <Router>
                    <NavBar/>
                </Router>
                <Router>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route path="/home">
                                <Home/>
                            </Route>
                            <Route path="/blog">
                                <Blog/>
                            </Route>
                            <Redirect to="/home" />
                        </Switch>
                    </Suspense>
                </Router>
                <Footer/>
            </div>
        );
    }
}
export default App;
