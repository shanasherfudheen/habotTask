import '../Header/Header.css'

function Header() {

    return (

        <div className="heading">
            <div className="logo">
                <div className="outerbox">
                    <div className="innerbox"></div>
                </div>
                <div className="logo-text">
                    <h3>HABOT</h3>
                </div>
                
            </div>
            <div className="menus">
                <a href="">Find Suppliers</a>
                <button className="dropbtn">Find Service Tags <i class="fa fa-caret-down"></i></button>
            </div>
            <div className="login-signup">
                <button>
                    <a href="">Login/</a>
                    <a href="">Sign Up</a>
                </button>
            </div>
        </div>

    )
}

export default Header