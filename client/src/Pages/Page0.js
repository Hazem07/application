import React from "react";
import "./Page0.css";
import PhoneIcon from "@mui/icons-material/Phone";
import { Button } from "@mui/material";
import {
  ButtonGroup,
  Carousel,
  Dropdown,
  DropdownButton,
  Item,
} from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { color } from "@mui/system";
const Page0 = () => {
  return (
    <div className="container">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
      />

      {/* <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid pe-lg-2 p-0">
          {" "}
          <a className="navbar-brand fw-bold fs-3" href="#">
            OGANI
          </a>{" "}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {" "}
            <span className="navbar-toggler-icon" />{" "}
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {" "}
                <a
                  className="nav-link pe-3 me-4 fw-bold active"
                  aria-current="page"
                  href="#"
                >
                  HOME
                </a>{" "}
              </li>
              <li className="nav-item">
                {" "}
                <a className="nav-link pe-3 me-4 fw-bold" href="#">
                  SHOP
                </a>{" "}
              </li>
              <li className="nav-item">
                {" "}
                <a className="nav-link pe-3 me-4 fw-bold" href="#">
                  PAGES
                </a>{" "}
              </li>
              <li className="nav-item">
                {" "}
                <a className="nav-link pe-3 me-4 fw-bold" href="#">
                  BLOG
                </a>{" "}
              </li>
              <li className="nav-item">
                {" "}
                <a className="nav-link pe-3 me-4 fw-bold" href="#">
                  CONTACT
                </a>{" "}
              </li>
            </ul>
            <ul className="navbar-nav icons ms-auto mb-2 mb-lg-0">
              <li className=" nav-item pe-3">
                {" "}
                <a href className="fas fa-heart">
                  {" "}
                  <span className="num rounded-circle">1</span>{" "}
                </a>{" "}
              </li>
              <li className=" nav-item pe-3">
                {" "}
                <a href className="fas fa-shopping-bag">
                  {" "}
                  <span className="num rounded-circle">3</span>{" "}
                </a>{" "}
              </li>
              <li className=" nav-item">
                {" "}
                <span className>items:</span>{" "}
                <span className="fw-bold">$150.00</span>{" "}
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <div className="row">
        <div className="col-lg-3 mb-lg-0 mb-2">
          <p>
            {" "}
            <a
              className="btn btn-primary w-100 d-flex align-items-center justify-content-between"
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="true"
              aria-controls="collapseExample"
            >
              {" "}
              <span className="fas fa-bars">
                <span className="ps-3">All department</span>
              </span>{" "}
              <span className="fas fa-chevron-down" />{" "}
            </a>{" "}
          </p>
          <div className="collapse show border" id="collapseExample">
            <ul className="list-unstyled">
              <li>
                <div className="mb-2">
                  {["end"].map((direction) => (
                    <DropdownButton
                      as={ButtonGroup}
                      key={direction}
                      id={`dropdown-button-drop-${direction}`}
                      drop={direction}
                      variant="light"
                      title={` Textile && cuir `}
                      style={{ marginTop: "1.2em" }}
                    >
                      <a className="dropdown-item" href="#">
                        Fresh Meat
                      </a>
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3">
                        Something else here
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>
                  ))}
                </div>
              </li>
              <li>
                <div className="mb-2">
                  {["end"].map((direction) => (
                    <DropdownButton
                      as={ButtonGroup}
                      key={direction}
                      id={`dropdown-button-drop-${direction}`}
                      drop={direction}
                      variant="light"
                      title={` Agroalimentaires
 `}
                    >
                      <a className="dropdown-item" href="#">
                        Vegetable
                      </a>
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3">
                        Something else here
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>
                  ))}
                </div>
              </li>
              <li>
                <div className="mb-2">
                  {["end"].map((direction) => (
                    <DropdownButton
                      as={ButtonGroup}
                      key={direction}
                      id={`dropdown-button-drop-${direction}`}
                      drop={direction}
                      variant="light"
                      title={` Mecaniques `}
                    >
                      <a className="dropdown-item" href="#">
                        Fruit &amp; Nut Gifts
                      </a>
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3">
                        Something else here
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>
                  ))}
                </div>
              </li>
              <li>
                <div className="mb-2">
                  {["end"].map((direction) => (
                    <DropdownButton
                      as={ButtonGroup}
                      key={direction}
                      id={`dropdown-button-drop-${direction}`}
                      drop={direction}
                      variant="light"
                      title={` Electriques `}
                    >
                      <a className="dropdown-item" href="#">
                        Fresh Berries
                      </a>
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3">
                        Something else here
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>
                  ))}
                </div>
              </li>
              <li>
                <div className="mb-2">
                  {["end"].map((direction) => (
                    <DropdownButton
                      as={ButtonGroup}
                      key={direction}
                      id={`dropdown-button-drop-${direction}`}
                      drop={direction}
                      variant="light"
                      title={` Construction `}
                    >
                      <a className="dropdown-item" href="#">
                        Ocean Foods
                      </a>
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3">
                        Something else here
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>
                  ))}
                </div>
              </li>
              <li>
                <div className="mb-2">
                  {["end"].map((direction) => (
                    <DropdownButton
                      as={ButtonGroup}
                      key={direction}
                      id={`dropdown-button-drop-${direction}`}
                      drop={direction}
                      variant="light"
                      title={` Verres `}
                    >
                      <a className="dropdown-item" href="#">
                        Butter &amp; Eggs
                      </a>
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3">
                        Something else here
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>
                  ))}
                </div>
              </li>
              <li>
                <div className="mb-2">
                  {["end"].map((direction) => (
                    <DropdownButton
                      as={ButtonGroup}
                      key={direction}
                      id={`dropdown-button-drop-${direction}`}
                      drop={direction}
                      variant="light"
                      title={` Chimiques `}
                    >
                      <a className="dropdown-item" href="#">
                        Fast food
                      </a>
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3">
                        Something else here
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>
                  ))}
                </div>
              </li>
              <li>
                <div className="mb-2">
                  {["end"].map((direction) => (
                    <DropdownButton
                      as={ButtonGroup}
                      key={direction}
                      id={`dropdown-button-drop-${direction}`}
                      drop={direction}
                      variant="light"
                      title={` Autres`}
                    >
                      <a className="dropdown-item" href="#">
                        Fresh Onion
                      </a>
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3">
                        Something else here
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>
                  ))}
                </div>
              </li>
              <li>
                <div className="mb-2">
                  {["end"].map((direction) => (
                    <DropdownButton
                      as={ButtonGroup}
                      key={direction}
                      id={`dropdown-button-drop-${direction}`}
                      drop={direction}
                      variant="light"
                      title={` All categories `}
                    >
                      <a className="dropdown-item" href="#">
                        papayaya &amp; Crisps
                      </a>
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3">
                        Something else here
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>
                  ))}
                </div>
              </li>
              {/* <li>
                <a className="dropdown-item" href="#">
                  oatmeal
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Fresh Bananas
                </a>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="d-lg-flex">
            <div
              className="d-lg-flex align-items-center border"
              style={{
                marginLeft: "10em",
                height: "-webkit-fill-available",
                borderRadius: "2em",
              }}
            >
              <div className="d-flex align-items-center w-100 h-100 ps-lg-0 ps-sm-3 abc">
                {" "}
                <input
                  className="  ps-3"
                  type="text"
                  placeholder="what do you need?"
                />
                <div
                  className="btn btn-primary d-flex align-items-center justify-content-center"
                  style={{ marginLeft: "2em", borderRadius: "2em" }}
                >
                  {" "}
                  SEARCH
                </div>
                {/* <Button variant="success">Search</Button>{" "} */}
              </div>
            </div>
            <div className="d-flex align-items-center ms-lg-auto mt-lg-0 mt-3 pe-2">
              {" "}
              {/* <span className=" me-2 fas fa-phone bg-light rounded-circle" /> */}
              <PhoneIcon />
              <div className="d-flex flex-column ps-2">
                <p className="fw-bold" style={{ marginBottom: "0rem" }}>
                  +65.11.188.888
                </p>
                <p className="text-muted" style={{ marginBottom: "0rem" }}>
                  support 24/7
                </p>
              </div>
            </div>
          </div>
          {/* <div className=" d-lg-flex flex-lg-row d-flex flex-column-reverse bg-light mt-5">
            <div className="p-5" id={2}>
              <p className="p-green">FRUIT FRESH</p>
              <p className="fs-4 fw-bold">Vegetable</p>
              <p className="fs-4 fw-bold">100% Organic</p>
              <p className="text-muted mb-4">
                Free Pickup and Delivery Available
              </p>
              <div className="btn btn-success px-4">SHOP NOW</div>
            </div>
            <div id={1}>
              {" "}
              <img
                src="https://www.freepnglogos.com/uploads/vegetables-png/vegetables-about-our-philosophy-super-healthy-kids-23.png"
                className="w-75 h-75"
                alt=""
              />{" "}
            </div>
          </div> */}
          <div style={{ marginTop: "1em", height: "56%" }}>
            <Carousel variant="dark">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://gmtforwarding.si/wp-content/uploads/2020/11/AdobeStock_215510458-800x400.jpeg"
                  alt="First slide"
                  // style={{ width: "86%" }}
                />
                <Carousel.Caption>
                  {/* <h5>First slide label</h5>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://zipordering.com/assets/images/topiccluster/stock-control-procedures-1593213251-7030-800x400.png"
                  alt="Second slide"
                  // style={{ height: "86%" }}
                />
                <Carousel.Caption>
                  {/* <h5>Second slide label</h5> */}
                  {/* <h4 style={{ color: "green" }}>Get You's Now</h4> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://cdn.standardmedia.co.ke/images/thursday/rwzostwnk6enw8ad5fa425f62682c.jpg"
                  alt="Third slide"
                  // style={{ height: "86%" }}
                />
                <Carousel.Caption>
                  {/* <h5>Third slide label</h5>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p> */}
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page0;
