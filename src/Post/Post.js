import '../Post/Post.css'

function Post() {

    return(
        <div className="post-section">
            <div>
            <iframe className="video-buyer" width="500" height="230"
            src="" 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen></iframe>
            </div>
            <div className="dropdowns">
                <div className="buyer">
                    <a href="">Buyer</a>
                </div>
                <div className="supplier">
                    <a href="">Supplier</a>
                </div>
            </div>
        </div>
    )
}

export default Post