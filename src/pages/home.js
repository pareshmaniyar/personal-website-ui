import React from 'react';
import './home.scss';
import img from '../imgs/paresh-nobg.png';
import Coding from '../components/coding'
import Timeline from '../components/timeline'
import Contact from '../components/contact'

class Home extends React.Component {
    render(){
    return (
        <div className="home">
            <section className="main-section">
                {/* <div className="main-image"></div> */}
                <img className="profile-image" src={img}/>
                <div className="intro-text">
                    Hello, My name is
                    <div>Paresh Maniyar</div>
                    I am a Full Stack Developer based in Hyderabad. I work to make Ideas a Reality.
                </div>
            </section>
            <Coding/>
            <Timeline/>
            <Contact/>
        </div>
    )
    }
}
export default Home;
