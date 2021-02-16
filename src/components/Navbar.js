import React,{Component} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import 'materialize-css/dist/css/materialize.min.css';
import './css/navbar.css';
import img1 from './harendra.jpg';
import * as Scroll from 'react-scroll';
import {  Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

 

    const styles = {
        fontFamily: 'sans-serif',
        textAlign: 'center',
      };
      
      export default class Navbar extends React.Component {
      
        constructor(props) {
          super(props);
          this.scrollToTop = this.scrollToTop.bind(this);
        }
      
        componentDidMount() {
      
          Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
          });
      
          Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
          });
      
        }
        scrollToTop() {
          scroll.scrollToTop();
        }
        scrollTo() {
          scroller.scrollTo('scroll-to-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
          })
        }
        scrollToWithContainer() {
      
          let goToContainer = new Promise((resolve, reject) => {
      
            Events.scrollEvent.register('end', () => {
              resolve();
              Events.scrollEvent.remove('end');
            });
      
            scroller.scrollTo('scroll-container', {
              duration: 800,
              delay: 0,
              smooth: 'easeInOutQuart'
            });
      
          });
      
          goToContainer.then(() =>
            scroller.scrollTo('scroll-container-second-element', {
              duration: 800,
              delay: 0,
              smooth: 'easeInOutQuart',
              containerId: 'scroll-container'
            }));
        }
        componentWillUnmount() {
          Events.scrollEvent.remove('begin');
          Events.scrollEvent.remove('end');
        }
    
    render(){
    return (
        <>
            <nav className="light-blue darken-4">
                <div className="container">
                    <div className="nav-wrapper">
                        <Link to='/' className='brand-logo'>
                            CV
                        </Link>
                        <Link to='/' data-target='side-nav' className='sidenav-trigger'>
                            <i className='material-icons'>menu</i>
                        </Link>

                        <ul className="right hide-on-med-and-down">
                            <li>
                                <Link to="/">
                                    <i className="fas fa-home"></i> Home
                                </Link>
                            </li>

                            <li>
                            <a onClick={() => scroll.scrollTo(500)}>
                                    <i className="fas fa-copy"></i> Skills</a></li>

                                    <li> <a onClick={() => scroll.scrollTo(760)}><i className="fas fa-id-badge"></i> Experience</a></li>
                            

                            <li>
                            <a onClick={() => scroll.scrollTo(2000)}>
                                    <i className="fas fa-graduation-cap"></i> Education</a> </li>


                            <li><Link to="/portfolio">
                                <i className="fas fa-address-card"></i> Profilio</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <ul className="sidenav" id="side-nav">
            <li><div class="user-view">
      <div class="background">
        <img src="https://image.freepik.com/free-photo/many-old-books-wooden-background-source-information-open-book-indoor-home-library-knowledge-is-power_157947-1809.jpg" alt="background"/>
      </div>
      <a href="#user"><img class="circle" src={img1} alt="harendra"/></a>
      <a href="#name"><span class="white-text name">Harendra Kr. Das</span></a>
      <a href="#email"><span class="white-text email">hkdas5464@gmail.com</span></a>
    </div></li>
                <li>
                    <Link to="/">
                        <i className="fas fa-home"></i> Home
                                </Link>
                </li>
                <li>
                    <Link to="skills">
                        <i className="fas fa-copy"></i> Skills</Link></li>
                <li><Link to="/">
                    <i className="fas fa-id-badge"></i> Experience</Link></li>

                <li><Link to="/education">
                    <i className="fas fa-graduation-cap"></i> Education</Link></li>

                <li><Link to="/portfolio">
                    <i className="fas fa-address-card"></i> Profilio</Link>
                </li>
            </ul>
            
        </>
    )
    }
}


