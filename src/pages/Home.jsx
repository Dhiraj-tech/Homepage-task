import React from "react";
import { Button } from "react-bootstrap";

export const Home = () => {
  return (
    <>
      {/* Carousel start */}

      <div className="container-fluid p-0">
        <div
          id="header-carousel"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="doggy.png" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="home-text">
                  <h2 id="head1">
                    We provide the best care to our furry friends!
                  </h2>
                  <p className="slide-desc">
                    Top Quality of Pet Product Store.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#header-carousel"
            data-slide="prev"
          >
            <div className="btn btn-primary rounded-circle" id="second-car">
              <span className="carousel-control-prev-icon mb-n2"></span>
            </div>
          </a>
          <a
            className="carousel-control-next"
            href="#header-carousel"
            data-slide="next"
          >
            <div className="btn btn-primary rounded-circle" id="third-car">
              <span className="carousel-control-next-icon mb-n2"></span>
            </div>
          </a>
        </div>
      </div>

      {/* Carousel end */}

      {/* About us start */}

      <div className="container py-5">
        <div className="row py-5">
          <div className="col-lg-7 pb-5 pb-lg-0 px-3 px-lg-5">
            <div className="col-12 p-0">
              <img className="img-fluid w-100" src="dogg2.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="row px-3">
              <h1 className="display-4 mb-4" id="about-head">
                About Us
              </h1>
              <h5 className="text-muted mb-3" id="about-text">
                Pet House & Animal clinic was established with moto to provide
                qualitative and affordable animal healthcare service to your
                doorstep.
              </h5>
              <ul className="list-inline mt-5">
                <li>
                  <h5 className="text-muted">
                    <i
                      className="fa-regular fa-circle-check me-2"
                      id="about-icon"
                    ></i>
                    Comprehensive
                  </h5>
                </li>
                <li>
                  <h5 className="text-muted">
                    <i
                      className="fa-regular fa-circle-check me-2"
                      id="about-icon"
                    ></i>
                    Professional
                  </h5>
                </li>
                <li>
                  <h5 className="text-muted">
                    <i
                      className="fa-regular fa-circle-check me-2"
                      id="about-icon"
                    ></i>
                    Compassionate veterinary service
                  </h5>
                </li>
              </ul>
              <a
                href="#"
                className="btn btn-lg btn-primary mt-3 px-4"
                id="about-btn"
              >
                Contact{" "}
                <i className="fa-solid fa-circle-chevron-right ms-3"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About us end */}

      {/* Services start */}

      <h1 className="text-center mt-5" id="service-head">
        Our Services
      </h1>
      <p className="text-center text-muted" id="service-para">
        We provide a wide range of products & services for pets such as food,
        toys, grooming supplies, and veterinary care.
        <br />
        We aim to meet the needs of pet owners and ensure the health and
        happiness of their furry friends.
      </p>

      <main className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-4 my-3" id="service-card">
              <div className="card">
                <img
                  src="doog grooming.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Dog/Cat Grooming</h5>
                  <p className="card-text text-muted">
                    We are enhancing our skills, salon, and equipment to meet
                    the challenges of pet grooming.
                  </p>
                  <div className="text-center">
                    <Button className="service-btn" variant="primary">
                      View More
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4 my-3" id="service-card">
              <div className="card">
                <img
                  src="home treatment.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Home Treatment</h5>
                  <p className="card-text text-muted">
                    Our goal is to ensure pet welfare through home treatment and
                    prompt client response.
                  </p>
                  <div className="text-center">
                    <Button className="service-btn" variant="primary">
                      View More
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4 my-3" id="service-card">
              <div className="card">
                <img
                  src="clinical treatment.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Clinical Treatment</h5>
                  <p className="card-text text-muted">
                    Our clinic offers professional veterinary care with a focus
                    on disease prevention, diagnosis, and treatment
                  </p>
                  <div className="text-center">
                    <Button className="service-btn" variant="primary">
                      View More
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4 my-3" id="service-card">
              <div className="card">
                <img src="puppies.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Puppies Buying & Selling</h5>
                  <p className="card-text text-muted">
                    We buy and sell common breed puppies like Golden Retriever,
                    Husky, Pug, etc. 100% guarantee on the breed offered.
                  </p>
                  <div className="text-center">
                    <Button className="service-btn" variant="primary">
                      View More
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4 my-3" id="service-card">
              <div className="card">
                <img
                  src="dog training.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Dog Training</h5>
                  <p className="card-text text-muted">
                    Our team of dog trainers is passionate, dedicated, and has
                    years of professional experience.
                  </p>
                  <div className="text-center">
                    <Button className="service-btn" variant="primary">
                      View More
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4 my-3" id="service-card">
              <div className="card">
                <img src="dog matting.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Dog Matting</h5>
                  <p className="card-text text-muted">
                    Quality breeding requires experience and passion. We can
                    arrange and facilitate quality breed mating.
                  </p>
                  <div className="text-center">
                    <Button className="service-btn" variant="primary">
                      View More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Services end */}

      {/* Pet collection start */}

      <h1 className="text-center mt-5" id="service-head">
        Our Pet Collections
      </h1>
      <p className="text-center text-muted" id="service-para">
        "Bring joy to your home with a furry companion from our pet selection."
      </p>

      <main className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-3 my-3" id="carddy">
              <div className="card">
                <img
                  src="doog grooming.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Golden Retriever</h5>
                  <span className="text-muted">Gender:</span>
                  <span className="after-text me-4"> Male</span>{" "}
                  <span className="text-muted">Age:</span>
                  <span className="after-text"> 2 months</span>
                </div>
              </div>
            </div>

            <div className="col-3 my-3" id="carddy">
              <div className="card">
                <img
                  src="home treatment.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Doberman</h5>
                  <span className="text-muted">Gender:</span>
                  <span className="after-text me-4"> Male</span>{" "}
                  <span className="text-muted">Age:</span>
                  <span className="after-text"> 2 months</span>
                </div>
              </div>
            </div>

            <div className="col-3 my-3" id="carddy">
              <div className="card">
                <img
                  src="clinical treatment.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Apso</h5>
                  <span className="text-muted">Gender:</span>
                  <span className="after-text me-4"> Female</span>{" "}
                  <span className="text-muted">Age:</span>
                  <span className="after-text"> 1 year</span>
                </div>
              </div>
            </div>

            <div className="col-3 my-3" id="carddy">
              <div className="card">
                <img src="puppies.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Chihuahua</h5>
                  <span className="text-muted">Gender:</span>
                  <span className="after-text me-4"> Female</span>{" "}
                  <span className="text-muted">Age:</span>
                  <span className="after-text"> 1 year</span>
                </div>
              </div>
            </div>

            <div className="col-3 my-3" id="carddy">
              <div className="card">
                <img
                  src="dog training.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Japanese Spitz</h5>
                  <span className="text-muted">Gender:</span>
                  <span className="after-text me-4"> Male</span>{" "}
                  <span className="text-muted">Age:</span>
                  <span className="after-text"> 2 months</span>
                </div>
              </div>
            </div>

            <div className="col-3 my-3" id="carddy">
              <div className="card">
                <img src="dog matting.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">German Shepard</h5>
                  <span className="text-muted">Gender:</span>
                  <span className="after-text me-4"> Male</span>{" "}
                  <span className="text-muted">Age:</span>
                  <span className="after-text"> 2 months</span>
                </div>
              </div>
            </div>

            <div className="col-3 my-3" id="carddy">
              <div className="card">
                <img
                  src="doog grooming.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Husky</h5>
                  <span className="text-muted">Gender:</span>
                  <span className="after-text me-4"> Female</span>{" "}
                  <span className="text-muted">Age:</span>
                  <span className="after-text"> 3 months</span>
                </div>
              </div>
            </div>

            <div className="col-3 my-3" id="carddy">
              <div className="card">
                <img
                  src="clinical treatment.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Pug</h5>
                  <span className="text-muted">Gender:</span>
                  <span className="after-text me-4"> Female</span>{" "}
                  <span className="text-muted">Age:</span>
                  <span className="after-text"> 4 months</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          href="#"
          className="btn btn-lg btn-primary mt-3 me-3 px-4"
          id="pet-btn"
        >
          View All <i className="fa-solid fa-circle-chevron-right ms-3"></i>
        </a>
      </main>

      {/* Pet collection end */}

      {/* Get know start */}

      <div className="container-fluid p-3">
          <img src="dogwear.jpg" className="w-100" alt="" id="box" />
          <div id="box-content">
            <p className="box-para">One More Friend Thousands More Fun!</p>
            <h1 className="box-head">
              "Find your furry soulmate at Our Pet Shop."
            </h1>
            <a
              href="#"
              className="btn btn-lg bg-white mt-3 me-3 px-4"
              id="box-btn"
            >
              Get Now <i className="fa-solid fa-circle-chevron-right ms-3"></i>
            </a>
          </div>
      </div>

      {/* Get know end */}

      {/* Blog start */}

      <div className="container pt-5">
        <div className="d-flex flex-column text-center mb-5">
          <h1 className="text-center" id="blog-head">
            Our Blogs
          </h1>
        </div>
        <div className="row pb-3">
          <div className="col-lg-4 mb-4">
            <div className="card border-0 mb-2">
              <img className="card-img-top" src="home treatment.jpg" alt="" />
              <div className="card-body bg-light p-4">
                <h4 className="card-title text-truncate">
                  How to Choose the Right Bully Stick for Your Dog
                </h4>
                <p>
                  Below is an excerpt of porch.com article " Moving with Pets?
                  We have the Experts advice to do it Properly.
                </p>
                <Button className="service-btn" variant="primary">
                  View Details
                </Button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card border-0 mb-2">
              <img className="card-img-top" src="dog matting.jpg" alt="" />
              <div className="card-body bg-light p-4">
                <h4 className="card-title text-truncate">
                  Saving Lives: Animal House Shelter And Downtown Pet Supply
                </h4>
                <p>
                  Below is an excerpt of porch.com article " Moving with Pets?
                  We have the Experts advice to do it Properly.
                </p>
                <Button className="service-btn" variant="primary">
                  View Details
                </Button>{" "}
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card border-0 mb-2">
              <img className="card-img-top" src="dog training.jpg" alt="" />
              <div className="card-body bg-light p-4">
                <h4 className="card-title text-truncate">
                  Himalayan Yak Chews: 11 Benefits You Need To Know
                </h4>
                <p>
                  Below is an excerpt of porch.com article " Moving with Pets?
                  We have the Experts advice to do it Properly.
                </p>
                <Button className="service-btn" variant="primary">
                  View Details
                </Button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog end */}
    </>
  );
};
