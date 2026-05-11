export default function Footer() {
    return (
        <footer id="footer" class="footer position-relative light-background">
            <div class="container">
                <div class="row gy-5">

                    <div class="col-lg-4">
                        <div class="footer-content">
                            <a href="index.html" class="logo d-flex align-items-center mb-4">
                                <span class="sitename">W Mishra Digital</span>
                            </a>
                            <p class="mb-4">IT Services & Consulting Company Headquaters in Mumbai, India. A leading provider of innovative technology solutions.</p>

                            <div class="newsletter-form">
                                <h5>Stay Updated</h5>
                                <form action="forms/newsletter.php" method="post" class="php-email-form">
                                    <div class="input-group">
                                        <input type="email" name="email" class="form-control" placeholder="Enter your email" required="" />
                                        <button type="submit" class="btn-subscribe">
                                            <i class="bi bi-send"></i>
                                        </button>
                                    </div>
                                    <div class="loading">Loading</div>
                                    <div class="error-message"></div>
                                    <div class="sent-message">Thank you for subscribing!</div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-2 col-6">
                        <div class="footer-links">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="#"><i class="bi bi-chevron-right"></i> About</a></li>
                                <li><a href="#"><i class="bi bi-chevron-right"></i> Careers</a></li>
                                <li><a href="#"><i class="bi bi-chevron-right"></i> Press</a></li>
                                <li><a href="#"><i class="bi bi-chevron-right"></i> Blog</a></li>
                                <li><a href="#"><i class="bi bi-chevron-right"></i> Contact</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-2 col-6">
                        <div class="footer-links">
                            <h4>Solutions</h4>
                            <ul>
                                <li><a href="#"><i class="bi bi-chevron-right"></i> Digital Strategy</a></li>
                                <li><a href="#"><i class="bi bi-chevron-right"></i> Cloud Computing</a></li>
                                <li><a href="#"><i class="bi bi-chevron-right"></i> Data Analytics</a></li>
                                <li><a href="#"><i class="bi bi-chevron-right"></i> AI Solutions</a></li>
                                <li><a href="#"><i class="bi bi-chevron-right"></i> Cybersecurity</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="footer-contact">
                            <h4>Get in Touch</h4>
                            <div class="contact-item">
                                <div class="contact-icon">
                                    <i class="bi bi-geo-alt"></i>
                                </div>
                                <div class="contact-info">
                                    <p>Empire Centrum<br />Ambernath MIDC, Mumbai 421503<br />India</p>
                                </div>
                            </div>

                            <div class="contact-item">
                                <div class="contact-icon">
                                    <i class="bi bi-telephone"></i>
                                </div>
                                <div class="contact-info">
                                    <p>+91 98765 43210</p>
                                </div>
                            </div>

                            <div class="contact-item">
                                <div class="contact-icon">
                                    <i class="bi bi-envelope"></i>
                                </div>
                                <div class="contact-info">
                                    <p><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="791a16170d181a0d391c01181409151c571a1614">info@wmishra.com</a></p>
                                </div>
                            </div>

                            <div class="social-links">
                                <a href="#"><i class="bi bi-facebook"></i></a>
                                <a href="#"><i class="bi bi-twitter-x"></i></a>
                                <a href="#"><i class="bi bi-linkedin"></i></a>
                                <a href="#"><i class="bi bi-youtube"></i></a>
                                <a href="#"><i class="bi bi-github"></i></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="footer-bottom">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="copyright">
                                <p>© <span>Copyright</span> <strong class="px-1 sitename">W Mishra Digital</strong> <span>All Rights Reserved</span></p>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="footer-bottom-links">
                                <a href="#">Privacy Policy</a>
                                <a href="#">Terms of Service</a>
                                <a href="#">Cookie Policy</a>
                            </div>
                            <div class="credits">
                                Designed by <a href="https://wmishra.com/">W Mishra</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}