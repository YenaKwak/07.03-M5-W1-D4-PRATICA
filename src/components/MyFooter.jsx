import React from 'react';

const MyFooter = () => {
    return (
        <div className="container-fluid">
            <footer className="pb-3 pt-2 border-top">
                <div className="container">
                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                        <p className="col-md-4 mb-0 text-muted">&copy; 2024 Company, Inc</p>
                        <a href="#" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                        </a>
                        <ul className="nav col-md-4 justify-content-end">
                            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
                            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
                            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
                            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQ</a></li>
                            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default MyFooter;
