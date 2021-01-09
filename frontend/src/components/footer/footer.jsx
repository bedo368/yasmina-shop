import React from "react"
import Loader from "../loader/Loader"
import "./footer.style.scss"
const Footer = ({ history, ...otherprops }) => (
  <div className="footer ">
    <footer className="page-footer font-small text-light  pt-4">
      <div className="container">
        <ul className="list-unstyled list-inline text-center py-2">
          <li className="list-inline-item">
            <h5 className="mb-1">Have something for us </h5>
          </li>
          <li className="list-inline-item">
            <a href="mailto: abc@example.com">
              {" "}
              <button className=" bg-info btn btn-outline-white btn-light">
                Contact us
              </button>
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-copyright text-center py-3">© 2020 Copyright:</div>
    </footer>
  </div>
)

export default Footer
