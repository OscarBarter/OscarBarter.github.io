import React, { Component } from 'react';
//import image from './src/Assets/profile.jpg';

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.sidebarData = props.sidebarData;
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">
                    <span className="d-block d-lg-none">{this.sidebarData.firstName} {this.sidebarData.lastName}</span>
                    <span className="d-none d-lg-block">
                        <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={"http://</span>i0.wp.com/www.spottedinely.com/wp-content/uploads/2019/11/Oscar-Barter-Cambridgeshire-District-Cadet-of-the-Year-2020-scaled-e1574792828749.jpg?fit=1024%2C644&ssl=1" } alt=""></img>
                    </span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#experience">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#education">Education</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#interests">Interests</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#awards">Awards</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Sidebar;