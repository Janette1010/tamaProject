
const Footer = () => {
    return (
        <div className="main-footer">

            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src="../imgs/Tsubutchi.PNG.webp" alt="logo"></img>
                    </div>
                    {/*Column1*/}
                    <div className="col">
                        <h4>POLICY</h4>
                        <ul className="list-unstyled">
                            <li>Privacy Policy</li>
                            <li>Children's Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>
                    {/*Column2*/}
                    <div className="col">
                        <h4>SOCIAL</h4>
                        <ul className="list-unstyled">
                            <div className="icons">
                                <li><a href="http://discord.com" aria-label="discord" target="_blank"><i className="fa-brands fa-discord"></i></a></li>
                                <li><a href="http://instagram.com" rel="instagram" aria-label="instagram" target="_blank"><i className="fa-brands fa-instagram"></i></a></li>
                                <li><a href="http://tiktok.com" rel="tiktok" aria-label="tiktok" target="_blank"><i className="fa-brands fa-tiktok"></i></a></li>
                            </div>
                        </ul>
                    </div>
                    {/*Column3*/}
                    <div className="col">
                        <h4>CONTACT US</h4>
                        <ul className="list-unstyled">
                            <li>TamaIsland@tama.com</li>
                            <li>704-666-7890</li>
                            <li>Tamaisland, NC 23456</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} TAMA ISLAND | All rights reserved |
                    </p>
                </div>
            </div>
        </div>

    )
}
export default Footer;