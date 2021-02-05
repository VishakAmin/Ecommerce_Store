import React from 'react'
import Menu from './Menu';


const Base = ({
    title = "My title",
    description = "My Description",
    className = "bg-dark text-white p-4",
    children

}) => (
        <div>
            <Menu />

            <div className="container-fluid">
                <div className="jumbotron bg-dark text-white text-center">
                    <h2 className="display-4">{title}</h2>
                    <p className="lead">{description}</p>
                </div>
                <div className={className}>{children}</div>
            </div>
            <footer className="page-footer  bg-dark mt-auto ">
                <div className="container-fluid bg-primary text-white text-center py-3              ">
                    <h4>If you got any question feel free to reach out</h4>
                    <button className="btn btn-warning btn-lg ">Contact Us</button>
                </div>
                <div style={{ textAlign: "center" }} className="container">
                    <span className="text-muted">
                        Made with  &#10084; By Vishak Amin
                    </span>
                </div>
            </footer>

        </div >
    )

export default Base;