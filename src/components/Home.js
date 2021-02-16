import React, { Component } from 'react';
import Skills from './skill';
import Navbar  from './Navbar';
import Profile from './profile';
import Education from './educations';
import  Portfolios  from "./profielio";
import Experience from './experience';
import About from './About';
import Scroll from './scrollup'


export default class App extends Component {
    render() {
        return (
            <section>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col s12 m3">
                            <Profile />
                        </div>
                        <div className="col s12 m9">'
                       <Scroll/>
                        <About />
                        <Skills />
                        <Experience/>
                        <Education />

                        <Portfolios />
                    </div>
                </div>
                </div>
            </section>
        )
    }
}