

const Navigation = () => {
    return (
        <section className="container">
            <nav>
                <h1>Drop Us a <span>Line</span></h1>
            </nav>
            <main className="main-container">

                <div className="info-container">
                    <div>
                        <h3>Name*</h3>
                        <input type="text" name="" placeholder="Enter your name" />
                    </div>
                    <div>
                        <h3>Email*</h3>
                        <input type="text" name="" placeholder="Enter your email" />
                    </div>
                </div>

                <div className="info-container">
                    <div>
                        <h3>Phone Number <span>(optional)</span></h3>
                        <input type="text" name="" placeholder="Enter your phone number" />
                    </div>
                    <div>
                        <h3>Company name <span>(optional)</span></h3>
                        <input type="text" name="" placeholder="Enter your Company name" />
                    </div>
                </div>

                <div>
                    <div>
                        <h3>Services you need <span>(You can choose multiple)</span></h3>
                        <div className="btn-container">
                            <button className="btn">Mobile Development</button>
                            <button className="btn">Web Development</button>
                            <button className="btn">SQA Solution</button>
                            <button className="btn">Web UX/UI Design</button>
                            <button className="btn">API Integration</button>
                            <button className="btn">Mobile UX/UI Design</button>
                            <button className="btn">Software Development</button>
                            <button className="btn">Custom Service</button>


                        </div>
                    </div>


                </div>

                <div>

                    <div>
                        <h3>Your Budget <span>(Optional)</span></h3>
                        <div className="btn-container">
                            <button className="btn">Less then $5,00</button>
                            <button className="btn">$5,00- $1,000</button>
                            <button className="btn">$1,001 - $1500</button>
                            <button className="btn">$1500 - $2,000</button>
                        </div>
                    </div>
                </div>

                <div>
                    <h3>Deep Details About Your Query <span >(Optional)</span></h3>
                    <textarea name="" placeholder="Tell us more about your Query" id=""></textarea>
                </div>

                <div>
                    <h3>Add Attachments <span>(Optional)</span></h3>

                    <textarea name="" placeholder="(a brief, idea, branding guideline, old design,...)" id=""></textarea>
            

                </div>
            </main>

            <footer>
                <button>Send Inquiry</button>
            </footer>

        </section>
    )
}

export default Navigation
