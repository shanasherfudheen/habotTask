import '../Signup/Signup.css'

function Signup() {

    return (
        <section className="signup">
            <div className="welcome">
                <h2>Ready to dive into HABOT?</h2>
                <p>Signing up with HABOT opens the door to a world of new&nbsp;opportunities
                    and potential for business growth. Gain access to a vibrant community <br />
                    of like-minded individuals, unlock valuable resources, and take the first
                    step towards realizing your entrepreneurial dreams.
                </p>
            </div>
            <div className="location">
                <button class="loc-btn">Abu Dhabi</button>
                <button class="loc-btn">Dubai</button>
                <button class="loc-btn">Sharjah & Ajman</button>
                <button class="loc-btn">Fujairah</button>
                <button class="loc-btn">Ras Al Khaimah</button>
                <button class="loc-btn">Umm Al Quwain</button>
            </div>
            <div className="signup-btn">
                <button>Sign up Today !</button>
            </div>
        </section>
    )
}

export default Signup