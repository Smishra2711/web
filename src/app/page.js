import Image from "next/image";

export default function Home() {
  return (
    <section id="hero" class="hero section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="hero-content">
              <h1>Transform Your <span>Digital Future</span></h1>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.</p>
              <div class="hero-actions justify-content-center justify-content-lg-start">
                <a href="#services" class="btn-primary scrollto">Request Quote</a>
                <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" class="glightbox btn-video d-flex align-items-center">
                  <i class="bi bi-play-fill"></i>
                  <span>Watch Demo</span>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="hero-image">
              <img src="https://bootstrapmade.com/content/demo/Devin/assets/img/illustration/illustration-28.webp" class="img-fluid floating" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
