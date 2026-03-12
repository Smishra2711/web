import NavBar from "./navbar";

export default function Header() {


    return (
        <header id="header" className="header d-flex align-items-center fixed-top">
            <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
                <a href="index.html" className="logo d-flex align-items-center">
                    {/* <img src="assets/img/logo.webp" alt="" /> */}
                    <h1 className="sitename">Devin</h1>
                </a>
                <NavBar />
            </div>
        </header>

    )
}