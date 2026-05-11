import * as Config from '../../config';

export default function ContactUsSection() {
    return (
        <section id="contact" class="contact section">
            <div class="container section-title">
                <h2>Contact</h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>
            <div class="container">
                <div class="row align-items-stretch">
                    <div class="col-lg-7 order-lg-1 order-2">
                        <div class="contact-form-container">
                            <div class="form-intro">
                                <h2>Let's Start a Conversation</h2>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
                            </div>

                            <form action="forms/contact.php" method="post" class="php-email-form contact-form">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-field">
                                            <input type="text" name="name" class="form-input" id="userName" placeholder="Your Name" required=""/>
                                                <label for="userName" class="field-label">Name</label>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="form-field">
                                            <input type="email" class="form-input" name="email" id="userEmail" placeholder="Your Email" required=""/>
                                                <label for="userEmail" class="field-label">Email</label>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-field">
                                            <input type="tel" class="form-input" name="phone" id="userPhone" placeholder="Your Phone"/>
                                                <label for="userPhone" class="field-label">Phone</label>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="form-field">
                                            <input type="text" class="form-input" name="subject" id="messageSubject" placeholder="Subject" required=""/>
                                                <label for="messageSubject" class="field-label">Subject</label>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-field message-field">
                                    <textarea class="form-input message-input" name="message" id="userMessage" rows="5" placeholder="Tell us about your project" required=""></textarea>
                                    <label for="userMessage" class="field-label">Message</label>
                                </div>

                                <div class="my-3">
                                    <div class="loading">Loading</div>
                                    <div class="error-message"></div>
                                    <div class="sent-message">Your message has been sent. Thank you!</div>
                                </div>

                                <button type="submit" class="send-button">
                                    Send Message
                                    <span class="button-arrow">→</span>
                                </button>
                            </form>
                        </div>
                    </div>

                    <div class="col-lg-5 order-lg-2 order-1">
                        <div class="contact-sidebar">
                            <div class="contact-header">
                                <h3>Get in Touch</h3>
                                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud.</p>
                            </div>

                            <div class="contact-methods">
                                <div class="contact-method">
                                    <div class="contact-icon">
                                        <i class="bi bi-geo-alt"></i>
                                    </div>
                                    <div class="contact-details">
                                        <span class="method-label">Address</span>
                                        <p>{Config.default.addressLine1}<br />{Config.default.addressLine2}<br />{Config.default.country}</p>
                                    </div>
                                </div>

                                <div class="contact-method">
                                    <div class="contact-icon">
                                        <i class="bi bi-envelope"></i>
                                    </div>
                                    <div class="contact-details">
                                        <span class="method-label">Email</span>
                                        <p><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="d1b9b4bdbdbe91b3a4a2b8bfb4a2a2b5b4bcbeffb2bebc">info@wmishra.com</a></p>
                                    </div>
                                </div>

                                <div class="contact-method">
                                    <div class="contact-icon">
                                        <i class="bi bi-telephone"></i>
                                    </div>
                                    <div class="contact-details">
                                        <span class="method-label">Phone</span>
                                        <p>{Config.default.contactPhone}</p>
                                    </div>
                                </div>

                                <div class="contact-method">
                                    <div class="contact-icon">
                                        <i class="bi bi-clock"></i>
                                    </div>
                                    <div class="contact-details">
                                        <span class="method-label">Hours</span>
                                        <p>Monday - Friday: 9AM - 6PM<br/>Saturday: 10AM - 4PM</p>
                                    </div>
                                </div>
                            </div>

                            <div class="connect-section">
                                <span class="connect-label">Connect with us</span>
                                <div class="social-links">
                                    <a href="#" class="social-link">
                                        <i class="bi bi-linkedin"></i>
                                    </a>
                                    <a href="#" class="social-link">
                                        <i class="bi bi-twitter-x"></i>
                                    </a>
                                    <a href="#" class="social-link">
                                        <i class="bi bi-instagram"></i>
                                    </a>
                                    <a href="#" class="social-link">
                                        <i class="bi bi-facebook"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}