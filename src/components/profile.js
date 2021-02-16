import React from 'react';
import {HashLink as Link} from 'react-router-hash-link';
import './css/profile.css'
function profile() {
    return (
        <div>
            <div className="card">
                <div className="card-image">
                    <img className="activator" src="https://recstudentportal.com/udaanmembers/profile/harendra.jpg"
                    alt="harendra"></img>
                    <Link className="btn-floating halfway-fab waves-effect wave-light red">
                        <i className="material-icons activator">more_vert</i>
                    </Link>

                </div>
                <div className="card-content">
                    <span className="card-title activator gray-text text-darken-4">Harendra Kumar Das</span>
                    <p>Full Stack Devoleper</p>

                </div>
                <div className="card-reveal">
                    <span className="card-title gray-text text-darken-4">
                        Follow me
                        <i className="material-icons right">close</i>
                    </span>
                    <p className="flex-container">
                        <i className="fab fa-facebook-f gray-text text-darken-4 social-style"></i>
                        <i className="fab fa-twitter gray-text text-darken-4 social-style"></i>
                        <i className="fab fa-google-plus gray-text text-darken-4 social-style"></i>
                        <i className="fab fa-instagram gray-text text-darken-4 social-style"></i>
                    </p>
                </div>

            </div>
        </div>
    )
}

export default profile
