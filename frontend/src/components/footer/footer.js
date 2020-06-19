import React from 'react';
import './footer.css'

class Footer extends React.Component {

    render() {
        return (
            <div className="footer-container">
                <div>
                    <h1> NiteTrader Contributors </h1>
                </div>

                <div className="footer-contributors">
                    <div>
                        <h2> Ben Hafner </h2>
                        <ul>
                            <li>
                                < a href = "https://www.linkedin.com/in/brhafner/" >
                                    LinkedIn Profile
                                </a>
                            </li>
                            <li>
                                < a href = "https://github.com/brhafner" >
                                    GitHub Link
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2> Jason Wintery </h2>
                        <ul>
                            <li>
                                < a href = "https://www.linkedin.com/in/jasonwintery/" >
                                    LinkedIn Profile
                                </a>
                            </li>
                            <li>
                                < a href = "https://github.com/oranje19" >
                                    GitHub Link
                                </a>
                            </li>
                        </ul>
                        
                    </div>
                    <div>
                        <h2> Ryan Lynch </h2>
                        <ul>
                            <li>
                                <a href="https://www.linkedin.com/in/ryan-e-lynch/">
                                    LinkedIn Profile
                                </a>
                            </li>
                            <li>
                                < a href="https://github.com/relynch91">
                                    GitHub Link
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;