import { Button } from "react-bootstrap";

export const Services = () => {
  return (
    <>
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

      <div className="container pt-5">
        <div className="row pb-3">
          <div className="col-lg-4 mb-4">
            <div className="card border-0 mb-2">
              <img className="card-img-top" src="doog grooming.jpg" alt="" />
              <div className="card-body bg-light p-4">
                <h4 className="card-title text-truncate">Dog/Cat Grooming</h4>
                <p>
                  We are enhancing our skills, salon, and equipment to meet the
                  challenges of pet grooming.
                </p>
                <Button className="service-btn" variant="primary">
                  View More
                </Button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card border-0 mb-2">
              <img className="card-img-top" src="home treatment.jpg" alt="" />
              <div className="card-body bg-light p-4">
                <h4 className="card-title text-truncate">Home Treatment</h4>
                <p>
                  Our goal is to ensure pet welfare through home treatment and
                  prompt client response.
                </p>
                <Button className="service-btn" variant="primary">
                  View More
                </Button>{" "}
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card border-0 mb-2">
              <img
                className="card-img-top"
                src="clinical treatment.jpg"
                alt=""
              />
              <div className="card-body bg-light p-4">
                <h4 className="card-title text-truncate">Clinical Treatment</h4>
                <p>
                  Our clinic offers professional veterinary care with a focus on
                  disease prevention, diagnosis, and treatment
                </p>
                <Button className="service-btn" variant="primary">
                  View More
                </Button>{" "}
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card border-0 mb-2">
              <img className="card-img-top" src="puppies.jpg" alt="" />
              <div className="card-body bg-light p-4">
                <h4 className="card-title text-truncate">
                  Puppies Buying & Selling
                </h4>
                <p>
                  We buy and sell common breed puppies like Golden Retriever,
                  Husky, Pug, etc. 100% guarantee on the breed offered.
                </p>
                <Button className="service-btn" variant="primary">
                  View More
                </Button>{" "}
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card border-0 mb-2">
              <img className="card-img-top" src="dog training.jpg" alt="" />
              <div className="card-body bg-light p-4">
                <h4 className="card-title text-truncate">Dog Training</h4>
                <p>
                  Our team of dog trainers is passionate, dedicated, and has
                  years of professional experience.
                </p>
                <Button className="service-btn" variant="primary">
                  View More
                </Button>{" "}
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card border-0 mb-2">
              <img className="card-img-top" src="dog matting.jpg" alt="" />
              <div className="card-body bg-light p-4">
                <h4 className="card-title text-truncate">Dog Matting</h4>
                <p>
                  Quality breeding requires experience and passion. We can
                  arrange and facilitate quality breed mating.
                </p>
                <Button className="service-btn" variant="primary">
                  View More
                </Button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
