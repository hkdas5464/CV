import React from 'react'

function About() {
    return (
        <div>
            <div className="card">
                <div className="card-content">
                    <h6 className="mt-botom">
                    <strong>About Me</strong>
                    </h6>
                    <p className="gray-text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                     when an unknown printer took a galley of type and scrambled it to make a type
                      specimen book. It has survived not only five centuries, but also the leap into
                       electronic typesetting, remaining essentially unchanged. It was popularised 
                       in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker
                     including versions of Lorem Ipsum.
                    </p>
                </div>
                <div className="card-action">
                    <h6><strong>PERSONAL INFO</strong></h6>
                    <div className="row mt">
                        <div className="col s12 m6 l6 xl6">
                            <p><strong>Address:</strong> Village Ghatiyali</p>
                            <p><strong>E-mail:</strong>hkdas5464</p>
                            <p><strong>Phone:</strong>+91-8789369732</p>

                        </div>
                        <div className="s12 m6 l6 xl6">
                        <p><strong>Main Language:</strong> English</p>
                            <p><strong>Second Language:</strong>English</p>
                            <p><strong>Third Language:</strong>English</p>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default About
