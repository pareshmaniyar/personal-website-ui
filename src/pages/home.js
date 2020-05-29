import React from 'react';
import './home.scss';

class Home extends React.Component {
    render(){
    return (
        <div className="home">
            <section className="main-section">
                <div className="intro-text">
                    Hello, My name is
                    <div>Paresh Maniyar</div>
                    I am a Full Stack Developer based in Hyderabad. I work to make Ideas a Reality.
                </div>
                <div className="main-image"></div>
            </section>
        </div>
    )
    }
}
export default Home;
