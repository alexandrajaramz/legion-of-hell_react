import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          time: '00:00:00'
        }
    }
    
    componentDidMount() {
        setInterval(()=>{
            this.getTime();
        }, 1000);
    }
    
    getTime(){
        const actualDate = new Date();

        const hours = actualDate.getHours();
        const minutes = actualDate.getMinutes();
        const seconds = actualDate.getSeconds();
        
        this.setState({
            time: `${hours}:${minutes}:${seconds}`
        })
    }

    render() {
        return (
            <footer className="app__footer">
                <p className="footer-text">loh(); || {this.state.time}</p>
            </footer>
        );
    }
}

export default Footer;