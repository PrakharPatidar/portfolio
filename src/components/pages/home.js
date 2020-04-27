import React, { Component } from 'react'
import '../../css/home.css';

class home extends Component {
    render() {
        const startDate = new Date('7/11/2016');
        const today_date = new Date();
        const differnce = (today_date - startDate) / 1000;
        const years = differnce / (60 * 60 * 24 * 365.25);
        const diffyear = Math.floor(years);
        const diffMonth = Math.floor((years - diffyear) * 12);
        return (
            <div className='container home-container transition-left-to-right'>
                <div className='row'>
                    <section className='main-first'>
                        <h2 className='main-title'> Hi, I am Prakhar Patidar</h2>
                        <p className='main-content'>
                            I am a <b>Data Scientist</b> by profession. In my {diffyear} years and {diffMonth} months of software industry experience not only
                            I have worked on various data science technologies, but also got my hands dirty on few FrontEnd, BankEnd, DevOps, Big data and system integration technolgoies.
                            Latest technologies and integration techniques easily attracts me to try them out and take better decisions for software development.
                        </p>
                    </section>
                    <section>
                        <h2 className='main-title'> Fun facts about me!</h2>
                        <p className='main-content'>
                            I am a <b>Data Scientist</b> by profession. In my {diffyear} years and {diffMonth} months of software industry experience not only
                            I have worked on various data science technologies, but also got my hands dirty on few FrontEnd, BankEnd, DevOps, Big data and system integration technolgoies.
                            Latest technologies and integration techniques easily attracts me to try them out and take better decisions for software development.
                        </p>
                    </section>
                </div>
            </div>
        )
    }
}

export default home
