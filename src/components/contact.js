import React from 'react';
import './contact.scss';
import { toast } from 'react-toastify';
import './ReactToastify.min.css'
toast.configure();

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.notify = this.notify.bind(this);
        this.onMessage = this.onMessage.bind(this);
    }
    notify(){
        toast.error('Notify', {position: toast.POSITION.TOP_CENTER});
    }
    onMessage(){
        
    }
    render() {
        return (
            <section id="contact" className="contact">
                <h2 className="title">Contact Me!</h2>
                <form className="form">
                    <div className="form-element">
                        <label for="email-for-contact">Email</label><br/>
                        <input id="email-for-contact" type="email" className="writing" ></input>
                    </div>
                    <div className="form-element">
                        <label for="message-for-contact">Your thoughts</label><br/>
                        <textarea placeholder="What's on your mind?" id="message-for-contact" type="text" className="writing"/>
                    </div>
                    <div className="form-element">
                        <input id="subscribe-for-contact" type="checkbox" className="checkbox" checked/>&nbsp;
                        <label for="subscribe-for-contact">I want to subscribe to your blog</label>
                    </div>
                    <div className="submit-container">
                        <button className="submit-button" onClick={this.onMessage}>Let's Connect</button>
                    </div>
                </form>
            </section>
        )
    }
}
export default Contact;