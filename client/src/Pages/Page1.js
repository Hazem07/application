import React from "react";
import { Link } from "react-router-dom";
import "./Page1.css";

export const Page1 = ({ product }) => {
  return (
    <>
      {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" /> */}
      {/* <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" /> */}
      <div className="container">
        <div className="d-flex justify-content-center align-items-center mt-5">
          {" "}
          <button className="btn btn-dark abc">OUR CATEGORIES</button>{" "}
        </div>
        <div className="d-flex justify-content-center mt-3">
          {" "}
          <span className="text text-center">
            Finding Best Products Now
            <br /> in Your Fingertips
          </span>{" "}
        </div>
        <div className="row mt-2 g-4" style={{ "margin-bottom": "100px" }}>
          <div className="col-md-3">
            <div className="card p-1">
              <div className="d-flex justify-content-between align-items-center p-2">
                <Link to="/category/Textile">
                  {" "}
                  <div className="flex-column lh-1 imagename">
                    {" "}
                    <span>Textile</span> <span>& Cuirs</span>{" "}
                  </div>
                </Link>
                <div>
                  {" "}
                  <img
                    src="https://st2.depositphotos.com/29475518/43737/v/380/depositphotos_437379658-stock-illustration-sewing-machine-logo-design-vector.jpg"
                    height={100}
                    width={100}
                  />{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-2">
              <div className="d-flex justify-content-between align-items-center p-2">
                {/* <Link to="/Agro"> */}{" "}
                <Link to="/category/Agroalimentaires">
                  <div className="flex-column lh-1 imagename">
                    {" "}
                    <span>Agroalimentaires</span>{" "}
                  </div>
                </Link>
                {/* </Link> */}
                <div>
                  {" "}
                  <img
                    src="https://previews.123rf.com/images/avdeev3000/avdeev30001507/avdeev3000150700399/42830014-industrial-and-agricultural-icon.jpg"
                    height={100}
                    width={100}
                  />{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-2">
              <div className="d-flex justify-content-between align-items-center p-2">
                <Link to="/category/Mecaniques">
                  {" "}
                  <div className="flex-column lh-1 imagename">
                    {" "}
                    <span>Mécaniques </span>{" "}
                  </div>
                </Link>
                <div>
                  {" "}
                  <img
                    src="https://www.altur.it/foto/prodotti-categorie/58419665748d7201612021642292.jpg"
                    height={100}
                    width={100}
                  />{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-2">
              <div className="d-flex justify-content-between align-items-center p-2">
                <Link to="/category/Electriques">
                  <div className="flex-column lh-1 imagename">
                    {" "}
                    <span> Electriques</span>{" "}
                  </div>
                </Link>
                <div>
                  {" "}
                  <img
                    src="https://thumbs.dreamstime.com/b/symbole-d-%C3%A9clairage-et-de-signe-batterie-logo-%C3%A9lectricit%C3%A9-%C3%A9lectrique-ic%C3%B4ne-mod%C3%A8le-conception-vectoriels-%C3%A9clair-dans-le-165309559.jpg"
                    height={100}
                    width={100}
                  />{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-2tr5">
              <div className="d-flex justify-content-between align-items-center p-2">
                <Link to="/category/Materiaux">
                  <div className="flex-column lh-1 imagename">
                    {" "}
                    <span>Matériaux du construction </span>{" "}
                  </div>
                </Link>
                <div>
                  {" "}
                  <img
                    src="https://e7.pngegg.com/pngimages/561/373/png-clipart-building-materials-architectural-engineering-building-angle-building.png"
                    height={100}
                    width={100}
                  />{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-2">
              <div className="d-flex justify-content-between align-items-center p-2">
                <Link to="/category/Verre">
                  <div className="flex-column lh-1 imagename">
                    {" "}
                    <span> Verre</span>{" "}
                  </div>
                </Link>
                <div>
                  {" "}
                  <img
                    src="https://berlinpackaging.nl/wp-content/uploads/2021/05/Markets_winesandchampagnes.png"
                    height={100}
                    width={100}
                  />{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-2">
              <div className="d-flex justify-content-between align-items-center p-2">
                <Link to="/category/Chimique">
                  <div className="flex-column lh-1 imagename">
                    {" "}
                    <span>Chimique</span>{" "}
                  </div>
                </Link>
                <div>
                  {" "}
                  <img
                    src="https://st2.depositphotos.com/4398873/7554/v/600/depositphotos_75545387-stock-illustration-chemical-logo-with-flask.jpg"
                    height={100}
                    width={100}
                  />{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-2">
              <div className="d-flex justify-content-between align-items-center p-2">
                <Link to="/category/Autres">
                  <div className="flex-column lh-1 imagename">
                    {" "}
                    <span>Autres</span> <span>Divers</span>{" "}
                  </div>
                </Link>
                <div>
                  {" "}
                  <img
                    src="https://thumbs.dreamstime.com/b/gear-tool-idea-icon-logo-design-element-can-be-used-as-as-complement-to-95683049.jpg"
                    height={100}
                    width={100}
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Page1;
