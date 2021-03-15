import React from 'react'
import author from '../Harika.jpg'

const AboutMe = () => {
  return (
    <div className = "container py-5">
      <div className = "row">
        <div className = "col-lg-6 col-xm-12">
          <div className = "photo-wrap mb-5">
               <img className = "profile-img" src={author} alt="author.." />
          </div>
          
        </div>
        <div className = "col-lg-6 col-xm-12">
          <h1 className="about-heading"> About me</h1>
          <p>
          Hi, I am Harika. I am a graduate student graduating in May 2021. I have experience in developing web applications like glassdoor, yelp, cart-pool prototypes. I have built these applications from scratch, designing databases using MySQL and MongoDB, developing backend Restful APIs using Nodejs, and developing a user-friendly interface using Reactjs, Redux. Making the application faster using Apache Kafka messaging system. Also, deployed the applications using AWS
          </p>

        </div>

      </div>
      
    </div>
  )
}

export default AboutMe
