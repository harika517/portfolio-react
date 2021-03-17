import React from 'react'
import yelp from '../yelp.jpeg'
import myyelp from '../yelp_my.jpeg'
import glassdoor from '../glassdoor.jpeg'
import glassdoor2 from '../glassdoor2.jpeg'
import social from '../social.jpeg'
import transcoder from '../transcoder.jpeg'
import amazonreviews from '../amazonreviews.jpeg'
import recommendations from '../books-and-movies.jpeg'
import {PopupboxManager, PopupboxContainer} from "react-popupbox"
// fontawesome imports 
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearchPlus} from "@fortawesome/free-solid-svg-icons";
import "react-popupbox/dist/react-popupbox.css"
 
const Project = () => {
  // Transcoder
  const openPopupboxTranscoder =() => {
    const content =(
<>
    <img className="portfolio-image-popupbox" src={transcoder} alt="transcoder..."/> <h1 className = "project-title"> AI Models for Automatic Code Translations</h1><br/>
    <em><b>San Jose State University. This project is currently in progress (2019 - present)</b></em>
    <ul>
      <li><p> Developing AI models for translating Python programming language to R programming language and vice versa.</p></li>
      <li><p> Datasets for training, testing and validating the model are taken from github.</p></li>
      <li><p> Perfomed tokenization and de-tokenization on the datasets during dataset preprocessing phase.</p></li>
      <li><p> Developing a model using encoder-decoder architecture with attention mechanism.</p></li>
      <li><p> Integrating AI model with user friendly web application where user can provide his authentication and begin translation from source to target language.</p></li>
    </ul>
    <b className = "project-title">Technologies Used: </b><p>NLP, Neural Machine Translations, Encoder-Decoder, jQuery, React, Redux, JWT, MongoDB, AWS EC2 </p>
    </>
    )
    
    PopupboxManager.open({content});
    PopupboxManager.update({
      content,
      config:{
        titleBar:{
          text: "Transcoder - Python to R code translator"
        }
      }
    })

  }

  const PopupboxConfigTranscoder = {
    titleBar : {
      enable: true,
      text: "Transcoder - Python to R code translator",
    },
    fadeIn: true,
    fadeInSpeed: 500

  }

  // Yelp
  const openPopupboxYelp =() => {
    const content =(
<>
    <img className="portfolio-image-popupbox" src={myyelp} alt="yelp..."/> 
    <h3 className = "project-title"> Yelp application prototype  development using MERN Stack</h3><br/>
    <em><b>San Jose State University. (Fall - 2020) </b></em>
    <ul>
      <li><p> Developed a reliable web application that allows users to search for nearby restaurants, view their menu and make an order.</p></li>
      <li><p> Customized the application to allow restaurant owners to maintain and update order status.</p></li>
      <li><p> It also provisions users to browse through various upcoming events and register to them.</p></li>
      <li><p> A chat room feature is developed in the application allowing the users to communicate with restaurant owners and event organizers.</p></li>
    </ul>
    <b className = "project-title">Technologies Used: </b><p>MongoDB, Node JS, JSON Web Token, React, Redux, Apache Kafka, Redis, JMeter, Mocha, Enzyme, AWS EC2. </p>
    </>
    )
    
    PopupboxManager.open({content});
    PopupboxManager.update({
      content,
      config:{
        titleBar:{
          text: "Enterprise Distributed Systems"
        }
      }
    })
  }

  const PopupboxConfigYelp = {
    titleBar : {
      enable: true,
      text: "Enterprise Distributed Systems",
    },
    fadeIn: true,
    fadeInSpeed: 500

  }

  // Glassdoor
  const openPopupboxGlassdoor =() => {
    const content =(
<>
    <img className="portfolio-image-popupbox" src={glassdoor2} alt="glassdoor..."/> <h1 className = "project-title"> Glassdoor application prototype </h1><br/>
    <em><b>San Jose State University. (Fall - 2020)</b></em>
    <ul>
      <li><p> Developed a web application that tracks the student’s job application and employer’s job posting activities.</p></li>
      <li><p> It dynamically performs statistical analysis on job application status with respect to user’s demographics.</p></li>
      <li><p> The application’s performance is verified under various workloads using JMeter.</p></li>
      <li><p> Different authorizations are created and applied to users based on their roles (student and employer) using JSON Web Tokens.</p></li>
    </ul>
    <b className = "project-title">Technologies Used: </b><p>MySQL, MongoDB, Node JS, JSON Web Token, React, Redux, Apache Kafka, Redis, JMeter, Mocha, AWS EC2. </p>
    </>
    )
    
    PopupboxManager.open({content});
    PopupboxManager.update({
      content,
      config:{
        titleBar:{
          text: "Enterprise Distributed Systems"
        }
      }
    })
  }

  const PopupboxConfigGlassdoor = {
    titleBar : {
      enable: true,
      text: "Enterprise Distribution Systems",
    },
    fadeIn: true,
    fadeInSpeed: 500

  }

  // Social Network
  const openPopupboxSocial =() => {
    const content =(
<>
    <img className="portfolio-image-popupbox" src={social} alt="social..."/> <h1 className = "project-title"> Social networking application prototype using MERN Stack</h1><br/>
    <em><b>San Jose State University. (Summer - 2020)</b></em>
    <ul>
      <li><p> Developed a web application that serves developers to build their connections with other developers in the same field.</p></li>
      <li><p> The developers can maintain their education, job experiences, skill set and has access to view other developer’s profile based on specific searching criteria.</p></li>
    </ul>
    <b className = "project-title">Technologies Used: </b><p>MongoDB, Node JS, Express, JSON Web Token, React, Redux, Heroku. </p>
    </>
    )
    
    PopupboxManager.open({content});
    PopupboxManager.update({
      content,
      config:{
        titleBar:{
          text: "Developers Connector"
        }
      }
    })
  }

  const PopupboxConfigSocial = {
    titleBar : {
      enable: true,
      text: "Developers Connector",
    },
    fadeIn: true,
    fadeInSpeed: 500

  }

  // Amazon reviews
  const openPopupboxAmazon =() => {
    const content =(
<>
    <img className="portfolio-image-popupbox" src={amazonreviews} alt="amazonreviews..."/> <h1 className = "project-title"> Generating recommendations to users based on reviews. </h1><br/>
    <em><b>San Jose State University. (Spring - 2020)</b></em>
    <ul>
      <li><p>Performed data cleaning, data preprocessing on millions of amazon reviews.</p></li>
      <li><p> Performed topic modeling that enables detection of word and phrase patterns on amazon product reviews.</p></li>
      <li><p> Performed sentiment analysis which allows product companies to get insights on best and worst reviews for a given product.</p></li>
      <li><p>Generated recommendations using topic modeling and content based recommender systems.</p></li>
    </ul>
    <b className = "project-title">Technologies Used: </b><p>Apache Spark, Topic Modelling, LDA, LDA-Mallet, ALS, NLP, Sentiment Analyzer. </p>
    </>
    )
    
    PopupboxManager.open({content});
    PopupboxManager.update({
      content,
      config:{
        titleBar:{
          text: "Data Mining and Analytics"
        }
      }
    })
  }

  const PopupboxConfigAmazon = {
    titleBar : {
      enable: true,
      text: "Data Mining and Analytics",
    },
    fadeIn: true,
    fadeInSpeed: 500

  }

  // Recommender Systems
  const openPopupboxRecommendations =() => {
    const content =(
<>
    <img className="portfolio-image-popupbox" src={recommendations} alt="recommendations..."/> <h1 className = "project-title"> Generating recommendations to users from cross domains. </h1><br/>
    <em><b>San Jose State University. (Spring - 2020)</b></em>
    <ul>
      <li><p>Performed data cleaning, data preprocessing on millions of goodreads and movie dataset.</p></li>
      <li><p> Developed item-based, content-based and user based recommender systems that generates best recommendations to users from books domians with movies and vice versa.</p></li>
      <li><p> Performed sentiment analysis on goodreads reviews and movie reviews to get insights on positive and negative patterns in the data.</p></li>
    </ul>
    <b className = "project-title">Technologies Used: </b><p>ALS, NLP, Sentiment Analysis, Apache Spark, collaborative filtering methods. </p>
    </>
    )
    
    PopupboxManager.open({content})
  }

  const PopupboxConfigRecommendations = {
    titleBar : {
      enable: true,
      text: "Data Mining and Analytics ",
    },
    fadeIn: true,
    fadeInSpeed: 500

  }
  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <h1 className = "text-center py-5 about-heading">Portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-img-box" onClick={openPopupboxTranscoder}>
          <img className= "portfolio-img" src={transcoder} alt="transcoder"/>
          <div className="overflow"></div>
          <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
          </div>
        {/* - */}
          <div className="portfolio-img-box" onClick={openPopupboxYelp}>
          <img className= "portfolio-img" src={yelp} alt="yelp"/>
          <div className="overflow"></div>
          <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
          </div>
        {/* - */}
          <div className="portfolio-img-box" onClick={openPopupboxGlassdoor}>
          <img className= "portfolio-img" src={glassdoor} alt="glassdoor"/>
          <div className="overflow"></div>
          <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
          </div>
        </div>
        {/* - */}
        <div className="image-box-wrapper row justify-content-center">
        <div className="portfolio-img-box" onClick={openPopupboxSocial}>
        <img className= "portfolio-img" src={social} alt="social"/>
        <div className="overflow"></div>
        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
        </div>
        {/* - */}
        <div className="portfolio-img-box" onClick={openPopupboxAmazon}>
        <img className= "portfolio-img" src={amazonreviews} alt="amazonreviews"/>
        <div className="overflow"></div>
        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
        </div>
        {/* - */}
        <div className="portfolio-img-box" onClick = {openPopupboxRecommendations}>
        <img className= " portfolio-img" src={recommendations} alt="recommendations"/>
        <div className="overflow"></div>
        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
        </div>
        </div>
        {/* - */}
    
      </div>
      <PopupboxContainer {...PopupboxConfigTranscoder}/>
      <PopupboxContainer {...PopupboxConfigYelp}/>
      <PopupboxContainer {...PopupboxConfigGlassdoor}/>
      <PopupboxContainer {...PopupboxConfigSocial}/>
      <PopupboxContainer {...PopupboxConfigAmazon}/>
      <PopupboxContainer {...PopupboxConfigRecommendations}/>
    </div>
  )
}

export default Project
