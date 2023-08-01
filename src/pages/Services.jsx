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
                    We are enhancing our skills, salon, and 
                    equipment to meet the challenges of pet
                    grooming.
                  </p>
                  <div className="text-center">
                  <Button className="service-btn" variant="primary">View More</Button>
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
                    Our goal is to ensure pet welfare through
                    home treatment and prompt client response.
                  </p>
                  <div className="text-center">
                  <Button className="service-btn" variant="primary">View More</Button>
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
                    Our clinic offers professional veterinary care
                    with a focus on disease prevention, diagnosis,
                    and treatment
                  </p>
                  <div className="text-center">
                  <Button className="service-btn" variant="primary">View More</Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4 my-3" id="service-card">
              <div className="card">
                <img
                  src="puppies.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Puppies Buying & Selling</h5>
                  <p className="card-text text-muted">
                    We buy and sell common breed puppies like 
                    Golden Retriever, Husky, Pug, etc. 100%
                    guarantee on the breed offered.
                  </p>
                  <div className="text-center">
                  <Button className="service-btn" variant="primary">View More</Button>
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
                    Our team of dog trainers is passionate,
                    dedicated, and has years of professional
                    experience.
                  </p>
                  <div className="text-center">
                  <Button className="service-btn" variant="primary">View More</Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4 my-3" id="service-card">
              <div className="card">
                <img
                  src="dog matting.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Dog Matting</h5>
                  <p className="card-text text-muted">
                    Quality breeding requires experience and 
                    passion. We can arrange and facilitate quality
                    breed mating.
                  </p>
                  <div className="text-center">
                  <Button className="service-btn" variant="primary">View More</Button>
                  </div>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </main>
    </>
  );
};
