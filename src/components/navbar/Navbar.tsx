const Navbar =()=>{
    return <>
    <div className="container">
    <nav className="navbar navbar-expand-lg bg-lenght-tertiary mb-5 shadow p-3 mb-5 bg-body-tertiary rounded">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Schhoub</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                     <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                     <a className="nav-link active" aria-current="page" href="#">Produits</a>
                    </li>
                </ul>
                <div>
                    {/* Liens avec icônes */}
                    <a href="https://www.linkedin.com/in/salah-eddine-chhoub-5b4995200" target="_blank" className="me-3">
                        <i className="fab fa-linkedin fa-2x"></i> {/* Icône LinkedIn */}
                    </a>
                    <a href="https://github.com/Slhhoub" target="_blank" className="me-3">
                        <i className="fab fa-github fa-2x"></i> {/* Icône GitHub */}
                    </a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
       
    </>
}

export default Navbar;