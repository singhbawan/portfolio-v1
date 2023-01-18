import "./about.css";

function About() {
  return (
    <div>
      <section className="about_wrapper">
        <div >
          <div className="about_text">
            <p>
              Hello! My name is Bawandeep Singh, Full-stack web developer with
              past experience of Machine Building for 3+ years, having
              successfully delivered two machines to happy customers.
            </p>
            <br></br>
            <p>
              I enjoy creating things that live on the internet. My interest in
              programming started back in 2012 during my college where i learned
              programming robots and PLC's.
            </p>
            <br></br>
            <p>
              My love for programming developed in college during a
              competition where I facilitated communication between PLC and
              Raspberry Pi using Modbus. That was the first time I had to go
              through a lot documentation to understand the protocol and then
              program the controllers to communicate with each other. It was
              exhilarating when it worked, Since then I have always pursued to
              expand my knowledge.
            </p>
          </div>
        </div>
        <img
          className="about_img"
          src="/portfolio-v1/images/Profile_pic-full1.jpg"
          alt="Bawandeep's picture"
        ></img>
      </section>
    </div>
  );
}

export default About;
