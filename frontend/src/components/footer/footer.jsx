import React from "react"
import { SocialIcon } from "react-social-icons"

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
        <ul className="list-unstyled list-inline text-center py-2">
          <SocialIcon
            className="mx-2"
            url="https://www.facebook.com/groups/250750476287334"
            target="_blank"
          />
          <SocialIcon
            className="mx-2"
            url="https://www.instagram.com/yasminastore44/?igshid=ddkbjalsg8tq"
            target="_blank"
          />
          <SocialIcon
            url="https://www.facebook.com/%D9%8A%D8%A7%D8%B3%D9%85%D9%8A%D9%86%D8%A7-_-Yasmina-103399638151809"
            target="_blank"
          />
        </ul>
      </div>

      <div className="footer-copyright text-center py-3">
        Created by: abdullah attia{" "}
        <a href="mailto: engbedo489@gmail.com"> massege me </a>
      </div>
    </footer>
  </div>
)

export default Footer
