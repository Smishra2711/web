export default function AboutSection() {
    return (
        <section id="about" class="about section">
            <div class="container">
                <div class="row align-items-center">

                    <div class="col-lg-6">
                        <div class="about-image">
                            <img src="https://bootstrapmade.com/content/demo/Devin/assets/img/about/about-portrait-4.webp" alt="About" class="img-fluid" />
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="content">
                            <h2>Crafting Excellence Through Innovation and Dedication</h2>
                            <p class="lead">With a decade of operational excellence, W Mishra Group operates at the intersection of innovation and reliability.</p>
                            <p>Founded in 2015, we have evolved from a specialized development house into a comprehensive IT consultancy. Our leadership team brings cross-border expertise from major tech hubs, ensuring that every solution we deploy is built for international standards and future-proofed scalability.</p>

                            <div class="stats-row">
                                <div class="stat-item">
                                    <h3><span data-purecounter-start="0" data-purecounter-end="150" data-purecounter-duration="1" class="purecounter"></span>+</h3>
                                    <p>Projects Completed</p>
                                </div>
                                <div class="stat-item">
                                    <h3><span data-purecounter-start="0" data-purecounter-end="12" data-purecounter-duration="1" class="purecounter"></span>+</h3>
                                    <p>Years Experience</p>
                                </div>
                                <div class="stat-item">
                                    <h3><span data-purecounter-start="0" data-purecounter-end="98" data-purecounter-duration="1" class="purecounter"></span>%</h3>
                                    <p>Client Satisfaction</p>
                                </div>
                            </div>

                            <div class="cta-wrapper">
                                <a href="/blog" class="btn-cta">
                                    <span>Discover Our Story</span>
                                    <i class="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}