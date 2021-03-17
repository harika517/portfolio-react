import React from 'react'

const Experience = () => {
  return (
    <div className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>Experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h2>2014-2017</h2>
            <h3><b>Technical Services Speciaist. <em>IBM India Pvt. Ltd., Hyderabad, India</em></b> </h3>
            <p>
            Developed a module that helps to fetch data from centralized database and create service models using Java.Led a team of 9 members to follow guidelines of service, incident, and change management in the agile framework which increased efficiency of service management by 20%.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h2>2013-2014</h2>
            <h3><b>Senior Software Engineer. <em>Tech Mahindra, Chennai, India.</em></b> </h3>
            <p>
            Configured alert mechanism for early detection of network outage and collaborated with different teams to resolve amber alerts.Developed a feature that fetches network device details which needs monitoring from SMARTS application using Java.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h2>2014-2017</h2>
            <h3><b>Software Engineer<em>Computer Science Corporation, Chennai, India</em></b> </h3>
            <p>
            Automated device discoveries in SMARTS application monitoring environment which reduced the manual discovery task.Deployed new feature in SMARTS application that extended the application monitoring levels to disk space of servers.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Experience
