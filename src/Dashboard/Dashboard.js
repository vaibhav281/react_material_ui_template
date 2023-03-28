
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Style/css/newStyle.module.css';
export default function Dashboard() {
  return (
    <div>

      <div className="team-area pt-100 pb-70">
        <div className={styles.container}>
          <div className="section-title text-center">
            <span className="span-bg">Our Team</span>
            <h2>We Have an Expert & Dedicated Team Member</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua consectetur adipiscing.
            </p>
          </div>
          <div className="row pt-45">
            <div className="col-lg-4 col-md-6">
              <div className="team-item">
                <div className="team-img">
                  <img src="assets/img/team/team-img1.jpg" alt="Images" />
                  <div className="social-icon">
                    <ul className="social-link">
                      <li>
                        <Link to="#" target="_blank"><i className='bx bxl-facebook'></i></Link>
                      </li>
                      <li>
                        <Link to="#" target="_blank"><i className='bx bxl-twitter'></i></Link>
                      </li>
                      <li>
                        <Link to="#" target="_blank"><i className='bx bxl-linkedin'></i></Link>
                      </li>
                      <li>
                        <Link to="#" target="_blank"><i className='bx bxl-instagram'></i></Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.content}>
                  <h3>John Doe</h3>
                  <span>Founder - CEO</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="team-item">
                <div className="team-img">
                  <img src="assets/img/team/team-img3.jpg" alt="Images" />
                  <div className="social-icon">
                    <ul className="social-link">
                      <li>
                        <Link to="#" target="_blank"><i className='bx bxl-facebook'></i></Link>
                      </li>
                      <li>
                        <Link to="#" target="_blank"><i className='bx bxl-twitter'></i></Link>
                      </li>
                      <li>
                        <Link to="#" target="_blank"><i className='bx bxl-linkedin'></i></Link>
                      </li>
                      <li>
                        <Link to="#" target="_blank"><i className='bx bxl-instagram'></i></Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="content">
                  <h3>Jenifar Ambrina</h3>
                  <span>Co-Founder</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div className="team-item">
                <div className="team-img">
                  <img src="assets/img/team/team-img4.jpg" alt="Images" />
                  <div className="social-icon">
                    <ul className="social-link">
                      <li>
                        <Link to="#" target="_blank"><i className='bx bxl-facebook'></i></Link>
                      </li>
                      <li>
                        <Link to="#" target="_blank"><i className='bx bxl-twitter'></i></Link>
                      </li>
                      <li>
                        <Link to="#" target="_blank"><i className='bx bxl-linkedin'></i></Link>
                      </li>
                      <li>
                        <Link to="#" target="_blank"><i className='bx bxl-instagram'></i></Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="content">
                  <h3>Johan Smith</h3>
                  <span>Manager</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
