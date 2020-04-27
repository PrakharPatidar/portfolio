import React, { Component } from 'react'
import '../../css/home.css';

class home extends Component {
    render() {
        const startDate = new Date('7/11/2016');
        const today_date = new Date(); 
        const differnce = (today_date - startDate)/1000;
        const years = differnce/(60*60*24*365.25);
        const diffyear = Math.floor(years);
        const diffMonth = Math.floor((years - diffyear)*12);
        return (
            <div className='container home-container transition-left-to-right'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h2> Hi, I am Prakhar Patidar</h2>
                        <p>
                            I am a <b>Data Scientist</b> by profession. In my {diffyear} years and {diffMonth} months of software industry experience not only 
                            I have worked on various data science technologies, but also hands dirty on few FrontEnd, BankEnd, DevOps, Big data and system integration technolgoies. 
                            Latest technologies and integration techniques easily attracts me to try them out and take better decisions for software development.
                        </p>
                    </div>
                    <div className='col-md-0'>

                    </div>
                </div>
            </div>
        )
    }
}

export default home
