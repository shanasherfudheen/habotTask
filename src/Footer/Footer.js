import '../Footer/Footer.css'

function Footer() {

    return (
        <div className="footer">
            <hr></hr>
            <div className="logo">
                <div className="outerbox">
                    <div className="innerbox"></div>
                </div>
                <div className="logo-text">
                    <h3>HABOT</h3>
                </div>
            </div>

            <div className="footerlinks">
                <h5>Company</h5>
                <a href="">About</a>
                <a href="">FAQ</a>
            </div>
            <div className="footerlinks">
                <h5>Terms</h5>
                <a href="">Data privacy</a>
                <a href="">Terms</a>
                <a href="">Accessibility</a>
            </div>
            <div className="footerlinks">
                <h5>Related</h5>
                <a href="">Find Buyer</a>
                <a href="">Feedback</a>
            </div>
            <hr />
        </div>
       
    )
}

export default Footer