import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join us for an Adventure this Winter!
        </p>
        <p className="footer-subscription-text">
          An initiative by Open Source Community
        </p>
        {/* <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div> */}
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/register">Register</Link>
            <a href="https://google.com" target="_blank">
              Open Source Community
            </a>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <a href="https://www.instagram.com/osc.vitap" target="_blank">
              Instagram
            </a>
            <a href="https://www.facebook.com/vitap.osc" target="_blank">
              Facebook
            </a>
            <a
              href="https://www.youtube.com/channel/UCL7e5F8GJIkLDKiu5pv2NAw"
              target="_blank"
            >
              Youtube
            </a>
            <a
              href="https://www.linkedin.com/company/open-source-community-vit-ap"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              WSoC
              <i class="fas fa-code-branch" />
            </Link>
          </div>
          <small class="website-rights">Open Source Community © 2020</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
