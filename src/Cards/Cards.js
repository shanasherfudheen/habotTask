import '../Cards/Cards.css'

function Cards() {

    return (
        <div className="card-heading">
            <h4>How it works?</h4>
            <p>Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with
                potential buyers, and build successful business relationships, sharing valuable feedback.</p>

            <div className="row ms-5">
                <div className="card m-5">
                    <img src="images/contact.png" className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">Select Your Role and

                            Sign Up</h5>

                    </div>
                </div>
                <div class="card m-5">
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Buyers Post Your
                            Requirements</h5>

                    </div>
                </div>
                <div class="card m-5">
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Review, Select, and
                            Contact the Best Suppliers</h5>

                    </div>
                </div>
            </div>

            <div class="row ms-5">
                <div class="card m-5">
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Suppliers Complete your
                            profile and get notified for

                            opportunities</h5>

                    </div>
                </div>
                <div class="card m-5">
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Contact to Buyers and Share
                            your Quote for the service</h5>

                    </div>
                </div>
                <div class="card m-5">
                    <img src="contact.png" class="card-img-top" alt="" />
                    <div class="card-body">
                        <h5 class="card-title">Both the Parties can Connect
                            and Make Business Leave a

                            Feedback</h5>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cards