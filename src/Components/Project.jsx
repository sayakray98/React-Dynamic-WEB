import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function Project(props) {
    

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <a className="navbar-brand" href="/">LOGO</a>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.togglemode} />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link headernav" to="/home">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link headernav" to="/about">ABOUT US</Link >
                        </li>
                        <li className="nav-item">
                            <a className="nav-link headernav" href="/">WORK</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link headernav" href="/">INFO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link headernav" href="/">CONTACT US</a>
                        </li>
                    </ul>
                </div>
            </nav>
           
        </>
    );
}

Project.propTypes = {
    title: PropTypes.string,
};
