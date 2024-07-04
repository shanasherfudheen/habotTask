import '../Banner/Banner.css'

function Banner() {

    return (
        <div className="banner banner-text">
            <h1 className="title">Are You a Supplier?</h1>
            <p className="subtitle">Explore Matching Opportunities.</p>
            <div className="buttons">
                <button className="btn"><i class="icons fa-solid fa-briefcase fa-lg"></i> <span id="btn-text">Search your required service here</span></button>
                <button className="btn"><i class="icons fa-solid fa-location-dot fa-lg"></i> <span id="btn-text">Search your desired location here</span></button>
                <button className="search-btn">Search</button>
            </div>
            <div className="para">
                <p>Are you a buyer?
                <a href=""> Click here if you are looking to post a requirements</a>
                </p>
                
            </div>
        </div>
    )
}

export default Banner