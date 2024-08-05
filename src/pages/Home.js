import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import heroImg from "../assets/main.png";
import hero_shape from "../assets/shape.svg";
import about_me from "../assets/about-me.png";
import html from "../assets/skills/html5.svg";
import css from "../assets/skills/css3.svg";
import bootstrap from "../assets/skills/bootstrap.svg";
import javascript from "../assets/skills/javascript.svg";
import figma from "../assets/skills/figma.svg";
import git_hub from "../assets/skills/github.svg";
import react from "../assets/skills/react.svg";
import node from "../assets/skills/nodejs.svg";
import mongo from "../assets/skills/mongodb.svg";
import draw from "../assets/skills/draw.png";
import step_1 from "../assets/step-1.png";
import step_2 from "../assets/step-3.png";
import step_3 from "../assets/step-4.png";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaRegFileLines,
} from "react-icons/fa6";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import resumePdf from "../assets/Parth_resume.pdf";
import Go_to_top from "../components/Go_to_top.js";

const Home = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    message: "",
    contact: "",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    // Reset the form data to its initial state
    setFormValues({
      username: "",
      email: "",
      message: "",
      contact: "",
      // other fields...
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("https://formspree.io/f/xpzgqzwg", formValues)
      .then((res) => {
        if (res.status === 200) {
          toast.success("Done your submission 👍  !", {
            position: toast.POSITION.TOP_RIGHT,
          });

          setTimeout(() => {
            resetForm();
          }, 300);

          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {/* Navbar   */}
      <header className="header">
        <Navbar
          collapseOnSelect
          expand="lg"
          className="header bg-body-tertiary"
        >
          <Container>
            <Navbar.Brand className="nav_title" href="/">
              Parth Kapadia
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link className="nav_link active" href="#about_section">
                  About Me
                </Nav.Link>
                <Nav.Link className="nav_link" href="#skills_section">
                  Skills
                </Nav.Link>
                <Nav.Link className="nav_link" href="#contact_section">
                  Contact Me
                </Nav.Link>
                <Button variant="outline-info" href="#work_section" size="xl">
                  Portfolio
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      {/* hero */}
      <section className="hero">
        <Container>
          <div className="hero_main">
            <Row className="d-flex justify-content-center align-items-center">
              <Col>
                <div className="home_side">
                  <h4>MERN Stack Developer</h4>
                  <p className="text_info">
                    Get Web Solutions that add value to your business
                  </p>
                  <a
                    href={resumePdf}
                    download="Parth Kapadia"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button variant="outline-info" size="xl">
                      Resume
                    </Button>
                  </a>
                </div>
              </Col>
              <Col>
                <div className="hero_img text-center">
                  <img src={heroImg} alt="hero_img" />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        <div className="hero_shape">
          <img src={hero_shape} alt="shape" className="w-100" />
        </div>
      </section>

      {/* about me */}
      <section className="sec_main" id="about_section">
        <Container>
          <Row>
            <Col>
              <div className="home_side">
                <img src={about_me} alt="about" className="w-100 " />
              </div>
            </Col>
            <Col>
              <div className="about_details">
                <p>WHAT I DO</p>
                <h3>Your partner in digital transformation</h3>
                <h4>
                  Hi, I'm <span>Parth Kapadia </span>, a web developer based in
                  Surat, India. I'm passionate about bringing both the technical
                  and visual aspects of digital products to life. I'm happiest
                  when I'm creating, learning, exploring and thinking about how
                  to make things better.
                </h4>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* skills */}
      <section className="skills" id="skills_section">
        <Container>
          <div className="skills_detail">
            <p>SKILLS & TOOLS</p>
            <h3>My Toolbox & Things I can do</h3>
            <h4>
              THE SKILLS, TOOLS AND TECHNOLOGIES I USE TO BRING YOUR PRODUCTS TO
              LIFE
            </h4>
          </div>
          <div className="skills_image">
            <div className="skill_item">
              <img src={html} alt="html" />
              <h5>HTML5</h5>
            </div>
            <div className="skill_item">
              <img src={css} alt="html" />
              <h5>CSS3</h5>
            </div>
            <div className="skill_item">
              <img src={bootstrap} alt="html" />
              <h5>Bootstrap</h5>
            </div>
            <div className="skill_item">
              <img src={javascript} alt="html" />
              <h5>Javascript</h5>
            </div>
            <div className="skill_item">
              <img src={figma} alt="html" />
              <h5>Figma</h5>
            </div>
            <div className="skill_item">
              <img src={git_hub} alt="html" />
              <h5>Git hub</h5>
            </div>
            <div className="skill_item">
              <img src={react} alt="html" />
              <h5>React</h5>
            </div>
            <div className="skill_item">
              <img src={node} alt="html" />
              <h5>Node js</h5>
            </div>
            <div className="skill_item">
              <img src={mongo} alt="html" />
              <h5>Mongo db</h5>
            </div>
            <div className="skill_item">
              <img src={draw} alt="html" />
              <h5>Draw</h5>
            </div>
          </div>
        </Container>
      </section>

      {/* portfolio */}
      {/* <section className="sec_main" id="work_section">
        <Container>
          <div className="portfolio_details">
            <p>PORTFOLIO</p>
            <h3>Check out my best work</h3>
          </div>
          <div className=""></div>
        </Container>
      </section> */}

      {/* building process */}
      <section className="sec_main">
        <Container>
          <div className="process">
            <div className="process_header">
              <p>HOW I DO IT</p>
              <h3>My 3 step process for building MERN stack projects</h3>
            </div>
            <Row className="align-items-center">
              <Col lg={6}>
                <div className="first_process">
                  <h1>01</h1>
                  <div className="process_detail">
                    <h3>Plan and define the project</h3>
                    <ol>
                      <li>Understand the project requirements.</li>
                      <li>Prepare sitemap.</li>
                      <li>
                        Create sketches, wireframes and mockups in Figma or
                        Draw.
                      </li>
                    </ol>
                  </div>
                </div>
              </Col>

              <Col lg={6}>
                <div className="first_img">
                  <img className="w-100" src={step_1} alt="" />
                </div>
              </Col>

              <Col lg={6}>
                <div className="first_img">
                  <img className="w-100" src={step_2} alt="" />
                </div>
              </Col>

              <Col lg={6}>
                <div className="first_process">
                  <h1>02</h1>
                  <div className="process_detail">
                    <h3>Build</h3>
                    <ol>
                      <li>Setup server using NodeJs.</li>
                      <li>Create MongoDb database, schemas and data models.</li>
                      <li>
                        Design backend routes and endpoints using REST APIs.
                      </li>
                      <li>Test backend functionality using Postman.</li>
                      <li>
                        Setup frontend by creating React app, installing
                        react-dom and react-router.
                      </li>
                      <li>Create React Components.</li>
                      <li>Setup redux store, reducers and actions.</li>
                    </ol>
                  </div>
                </div>
              </Col>

              <Col lg={6}>
                <div className="first_process">
                  <h1>03</h1>
                  <div className="process_detail">
                    <h3>Test, Optimize & Launch</h3>
                    <ol>
                      <li>Optimize for responsive layout.</li>
                      <li>
                        Test functionality across various browsers and aspect
                        ratios.
                      </li>
                      <li>Optimize react for production build.</li>
                      <li>Buy domain name.</li>
                      <li>
                        Deploy on Hostinger or host on GitHub using GitHub
                        Pages.
                      </li>
                    </ol>
                  </div>
                </div>
              </Col>

              <Col lg={6}>
                <div className="first_img">
                  <img className="w-100" src={step_3} alt="" />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* Form */}
      <section className="sec_main" id="contact_section">
        <Container>
          <div className="form_section">
            <div className="form_headings">
              <p>Have some questions ?</p>
              <div>
                <div className="first_heading">
                  <h2>Let's</h2>
                </div>
                <div className="second_heading">
                  <h2>Talk</h2>
                </div>
              </div>
            </div>

            <div className="form_data">
              <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group
                  as={Col}
                  className="mb-3"
                  controlId="validationCustom01"
                >
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Username"
                    value={formValues.username}
                    name="username"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>
                <Form.Group
                  as={Col}
                  className="mb-3"
                  controlId="validationCustom02"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="Email"
                    value={formValues.email}
                    name="email"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>
                <Form.Group
                  as={Col}
                  className="mb-3"
                  controlId="validationCustom02"
                >
                  <Form.Label>Contact No</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder="Contact"
                    value={formValues.contact}
                    name="contact"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Send Message"
                    value={formValues.message}
                    name="message"
                    onChange={(e) => handleChange(e)}
                    rows={3}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  className="submit_btn w-100"
                  type="submit"
                >
                  Punch Me
                </Button>
                <ToastContainer />
              </Form>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer">
        <Container>
          <div className="footer_main">
            <h3>Parth Kapadia</h3>

            <div className="footer_resources">
              <h3>Resources</h3>
              <ul>
                <li>
                  <a href="https://github.com/ParthKapadia109">
                    <FaGithub className="icon" />
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={resumePdf}
                    download="Parth Kapadia"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaRegFileLines className="icon" />
                    Resume
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer_find_me">
              <h3>Find me on</h3>
              <ul>
                <li>
                  <NavLink to="https://www.linkedin.com/feed/">
                    <FaLinkedin className="icon" />
                    Linkedin
                  </NavLink>
                </li>
                <li>
                  <a href="#">
                    <FaInstagram className="icon" />
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
        <div className="footer_shape">
          <img src={hero_shape} alt="shape" className="w-100" />
        </div>
      </footer>

      <Go_to_top />
    </>
  );
};

export default Home;
