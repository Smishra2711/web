export default function ServicesSection() {

    const services = [
        {
            icon: "bi bi-palette",
            title: "Custom Software Engineering",
            description: "Develop high-performance, secure, and scalable applications tailored to your unique business logic. From cloud-native portals to complex CRM integrations, we build the backbone of your digital infrastructure"
        },
        {
            icon: "bi bi-code-slash",
            title: "Strategic IT Consulting",
            description: "Leverage our 10 years of cross-border experience to navigate digital transformation. We provide roadmaps for infrastructure optimization, legacy system modernization, and tech-stack selection."
        },
        {
            icon: "bi bi-phone",
            title: "Managed Cloud & Data Solutions",
            description: "Beyond basic hosting, we provide comprehensive database management and cloud migration services ensuring 99.9% uptime and data integrity for enterprise-level workloads"
        },
        {
            icon: "bi bi-bar-chart",
            title: "Full-Cycle Mobile & Desktop Ecosystems",
            description: "Seamlessly integrated applications across Android and Windows environments, designed with sophisticated UI/UX to maximize user productivity and engagement."
        },
        {
            icon: "bi bi-shield-check",
            title: "Security Solution",
            description: "Description for Security Solution"
        },
        {
            icon: "bi bi-graph-up-arrow",
            title: "Business Strategy",
            description: "Description for Business Strategy"
        },
    ];

    const features = [
        {
            icon: "bi bi-laptop",
            title: "Streamlined Workflow Solution",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
            list: [
                "Integrated development environment",
                "Cloud-based collaborative tools",
                "Automated testing procedures"
            ],
            image: "https://bootstrapmade.com/content/demo/Devin/assets/img/illustration/illustration-14.webp"
        },
        {
            icon: "bi bi-graph-up",
            title: "Performance Analytics",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
            list: [
                "Real-time data visualization",
                "Custom report generation",
                "Predictive analysis models"
            ],
            image: "https://bootstrapmade.com/content/demo/Devin/assets/img/illustration/illustration-6.webp"
        },
        {
            icon: "bi bi-shield-lock",
            title: "Enterprise Security Framework",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
            list: [
                "Integrated development environment",
                "Cloud-based collaborative tools",
                "Automated security audits"
            ],
            image: "https://bootstrapmade.com/content/demo/Devin/assets/img/illustration/illustration-7.webp"
        },
        {
            icon: "bi bi-people",
            title: "Collaborative Team Environment",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
            list: [
                "Shared workspace functionality",
                "Real-time communication tools",
                "Progress tracking dashboards"
            ],
            image: "https://bootstrapmade.com/content/demo/Devin/assets/img/illustration/illustration-8.webp"
        }
    ];

    return (
        <>
            <section id="services" class="services section">
                <div class="container section-title">
                    <h2>Services</h2>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>

                <div class="container">
                    <div className="row gy-4">
                        {services.map((service, index) => (
                            <div className="col-lg-4 col-md-6" key={index}>
                                <div class="service-card">
                                    <div class="service-icon">
                                        <i class={service.icon}></i>
                                    </div>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="features" class="features section">
                <div class="container">
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div class="features-card">
                                <div class="icon-wrapper">
                                    <i class={feature.icon}></i>
                                </div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                                <div class="features-list">
                                    {feature.list.map((item, i) => (
                                        <div class="feature-item" key={i}>
                                            <i class="bi bi-check-circle-fill"></i>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div class="image-container">
                                    <img src={feature.image} alt={feature.title} class="img-fluid" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="how-we-work" class="how-we-work section">
                <div class="container section-title">
                    <h2>How We Work</h2>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>

                <div class="container">
                    <div class="steps-wrapper">
                        <div class="row">
                            <div class="col-lg-3 col-md-6">
                                <div class="step-item">
                                    <div class="step-circle">
                                        <span>1</span>
                                    </div>
                                    <h3>Discovery</h3>
                                    <p>Understanding your business goals and requirements through in-depth analysis and consultation sessions.</p>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6">
                                <div class="step-item">
                                    <div class="step-circle">
                                        <span>2</span>
                                    </div>
                                    <h3>Planning</h3>
                                    <p>Creating detailed project roadmaps and strategies aligned with your objectives and timeline requirements.</p>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6">
                                <div class="step-item">
                                    <div class="step-circle">
                                        <span>3</span>
                                    </div>
                                    <h3>Execution</h3>
                                    <p>Implementing solutions with precision while maintaining transparent communication throughout the process.</p>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6">
                                <div class="step-item">
                                    <div class="step-circle">
                                        <span>4</span>
                                    </div>
                                    <h3>Delivery</h3>
                                    <p>Finalizing implementations and providing comprehensive support to ensure long-term success.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}