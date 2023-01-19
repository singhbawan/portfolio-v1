import "./contact.css";

function Contact() {
  return (
    <div className="contact_wrapper">
      <div className="title_heading_container">
        <h1 className="title_heading">Contact</h1>
      </div>
      <div className="contact_item_container">
        <section className="contact_option_container">
          <article className="contact_option">
            <h4>Email</h4>
            <h5>singhbawan48@gmail.com</h5>
            <div className="contact_link">
              <a
                href="mailto:singhbawan48@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Email me
              </a>
            </div>
          </article>

          {/* Linkedin  */}
          <article className="contact_option">
            <h4>Linkedin</h4>

            <h5>Bawandeep Singh</h5>
            <div className="contact_link">
              <a
                href="https://www.linkedin.com/in/singhbawan/"
                target="_blank"
                rel="noreferrer"
              >
                Let's connect
              </a>
            </div>
          </article>
        </section>
        <section>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1441.5170652566756!2d-79.63212554171139!3d43.73061783293885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3b99b1290d8b%3A0xdfacbe510757c28!2sMississauga%2C%20ON%20L4T%203P3!5e0!3m2!1sen!2sca!4v1674142668003!5m2!1sen!2sca"
            loading="lazy"
          ></iframe>
        </section>
      </div>
    </div>
  );
}

export default Contact;
