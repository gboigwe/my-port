import React, { useState } from 'react';
import "./portfolio.css";
import TPA from "./TPA"
// import EPA from "./EPA"
import IMG1 from "../../assets/age_site.jpg";
import IMG2 from "../../assets/wordWall.jpg";
import IMG3 from "../../assets/Audit.jpg";
import IMG4 from "../../assets/bGyellow.jpg";
import IMG5 from "../../assets/Trust.jpg";
import IMG6 from "../../assets/port.jpg"
import IMG7 from "../../assets/portF1.png"

// const portFolio = [
//   {
//     id: 1,
//     img: IMG4,
//     title: 'Basic HTML, CSS, Portfolio',
//     github: 'https://github.com/gboigwe',
//     demo: "https://agetech.netlify.com",
//     alertMsg: "Basic Web development. What do you think?"
//   },
//   {
//     id: 2,
//     img: IMG4,
//     title: 'Audit Firm Site',
//     github: 'https://github.com/gboigwe',
//     demo: "https://agetech.netlify.com",
//     alertMsg: "Please note that this site is no longer used by the company name, but it is a done project" 
//   },
//   {
//     id: 3,
//     img: IMG4,
//     title: 'Facebook Messenger Bot',
//     github: 'https://github.com/gboigwe',
//     demo: "https://agetech.netlify.com",
//     alertMsg: "Please note that this facebook bot can be used for any smart business Artificial Intelligence. e.g Restaurant Interactor, Customer Relationship, Quick Response Bot, and many more"
//   },
//   {
//     id: 4,
//     img: IMG4,
//     title: 'Dictionary App',
//     github: 'https://github.com/gboigwe',
//     demo: "https://agetech.netlify.com",
//     alertMsg: "You can check this out, API reference to RANDOM API and DICTIONARY API." 
//   },
//   {
//     id:5,
//     img: IMG4,
//     title: 'Church Site',
//     github: 'https://github.com/gboigwe',
//     demo: "https://agetech.netlify.com",
//     alertMsg: "This Site is still under constrution and may or may not look completed, as the organization interested is not yet ready but the work has started" 
//   },
//   {
//     id: 6,
//     img: IMG4,
//     title: 'My Personal Portfolio',
//     github: 'https://github.com/gboigwe',
//     demo: "https://agetech.netlify.com",
//     alertMsg: "Check this out, it's responsive and interactive."
//   }
// ]

const Portfolio = () => {

  const [modalview1, setModalview1] = useState(false);
  const [modalview2, setModalview2] = useState(false);
  const [modalview3, setModalview3] = useState(false);
  const [modalview4, setModalview4] = useState(false);
  const [modalview5, setModalview5] = useState(false);
  const [modalview6, setModalview6] = useState(false);
  const [modalview7, setModalview7] = useState(false);

  const showPrePort1 = () => {
    setModalview1(true);
  }

  const closePrePort1 = () => {
    setModalview1(false);
  }
  
    const showPrePort2 = () => {
      setModalview2(true);
    }

    const closePrePort2 = () => {
      setModalview2(false);
    }

      const showPrePort3 = () => {
        setModalview3(true);
      }

      const closePrePort3 = () => {
        setModalview3(false);
      }

        const showPrePort4 = () => {
          setModalview4(true);
        }

        const closePrePort4 = () => {
          setModalview4(false);
        }

          const showPrePort5 = () => {
            setModalview5(true);
          }

          const closePrePort5 = () => {
            setModalview5(false);
          }

            const showPrePort6 = () => {
              setModalview6(true);
            }

            const closePrePort6 = () => {
              setModalview6(false);
            }
            
              const showPrePort7 = () => {
                setModalview7(true);
              }

              const closePrePort7 = () => {
                setModalview7(false);
              }

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <TPA />
      <div className="container">
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/RAKNPGBdKoM" 
          title="YouTube video player" 
          frameborder="1" 
          type "align=center"
          allow="accelerometer; 
          autoplay; clipboard-write; 
          encrypted-media; gyroscope; 
          picture-in-picture; 
          web-share" allowfullscreen>
        </iframe>
      </div>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG1} alt="img" />
          </div>
          <h3>Basic HTML, CSS, Portfolio</h3>
          <div className="portfolio__item-cta">
            <a className='btn' href="https://github.com/gboigwe/Akande-Gbolahan" target="_blank" rel='noopener noreferrer'>Github</a>
            <button  className='btn btn-primary' onClick={showPrePort1} >Live Demo</button>
          </div>
          {modalview1 && <div className='modal'>
            <h3  >Basic HTML, CSS, Portfolio</h3>
            <div className="modal-img">
              <img src={IMG1} alt="img2" />
            </div>
            <div className="modal-cta">
              <a className='btn btn-primary' href="https://agetech.netlify.com" target="_blank" rel='noopener noreferrer'>Show Me</a>
              <button className='btn btn-primary' onClick={closePrePort1} >Close Me</button>
            </div>
            <small style={{ color: "pink", fontSize: "13px" }}>Basic Web development. What do you think?</small>
          </div>}
          {modalview1 && <div className='backdrop'  onClick={closePrePort1} />}
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG3} alt="img" />
          </div>
          <h3>Audit Firm Site</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/gboigwe" className='btn' target="_blank" rel='noopener noreferrer'>No Github</a>
            <button  className='btn btn-primary' onClick={showPrePort2} >Live Demo</button>
          </div>
          {modalview2 && <div className='modal'>
            <h3  >Audit Firm Site</h3>
            <div className="modal-img">
              <img src={IMG3} alt="img2" />
            </div>
            <div className="modal-cta">
              <a className='btn btn-primary' href="https://auditage.netlify.app" target="_blank" rel='noopener noreferrer'>Show Me</a>
              <button className='btn btn-primary' onClick={closePrePort2} >Close Me</button>
            </div>
            <small style={{ color: "pink", fontSize: "13px" }}>Disclaimer!!! <br/>Created by AGE under the supervision of Anjonixvyte Technology. <br /> Take note that the site still operates but no longer used by organization</small>
          </div>}
          {modalview2 && <div className='backdrop'  onClick={closePrePort2} />}
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG2} alt="Word Wall" />
          </div>
          <h3>Dictionary App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/gboigwe/wordWall" className='btn' target="_blank" rel='noopener noreferrer'>Github</a>
            <button  className='btn btn-primary' onClick={showPrePort4} >Live Demo</button>
          </div>
          {modalview4 && <div className='modal'>
            <h3  >Word Wall</h3>
            <div className="modal-img">
              <img src={IMG2} alt="Word Wall" />
            </div>
            <div className="modal-cta">
              <a className='btn btn-primary' href="https://walldictionary.netlify.app" target="_blank" rel='noopener noreferrer'>Show Me</a>
              <button className='btn btn-primary' onClick={closePrePort4} >Close Me</button>
            </div>
            <small style={{ color: "pink", fontSize: "13px" }}>Check this out. Dictionary App, API reference to RANDOM API and DICTIONARY API.</small>
          </div>}
          {modalview4 && <div className='backdrop'  onClick={closePrePort4} />}
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG5} alt="img" />
          </div>
          <h3>Trust and Support Foundation</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/gboigwe" className='btn' target="_blank" rel='noopener noreferrer'>No Github</a>
            <button  className='btn btn-primary' onClick={showPrePort5} >Live Demo</button>
          </div>
          {modalview5 && <div className='modal'>
            <h3  >An NGO for women site</h3>
            <div className="modal-img">
              <img src={IMG5} alt="img2" />
            </div>
            <div className="modal-cta">
              <a className='btn btn-primary' href="https://thetrustandsupportfoundation.com" target="_blank" rel='noopener noreferrer'>Show Me</a>
              <button className='btn btn-primary' onClick={closePrePort5} >Close Me</button>
            </div>
            <small style={{ color: "pink", fontSize: "13px" }}>THE TRUST AND SUPPPORT FOUNDATION aims at supporting women and girls</small>
          </div>}
          {modalview5 && <div className='backdrop'  onClick={closePrePort5} />}
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG6} alt="img" />
          </div>
          <h3>My Personal Portfolio</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/gboigwe/AgeReactPort" className='btn' target="_blank" rel='noopener noreferrer'>Github</a>
            <button  className='btn btn-primary' onClick={showPrePort6} >Live Demo</button>
          </div>
          {modalview6 && <div className='modal'>
            <h3  >My Personal Portfolio</h3>
            <div className="modal-img">
              <img src={IMG6} alt="img2" />
            </div>
            <div className="modal-cta">
              <a className='btn btn-primary' href="https://ageport.netlify.app" target="_blank" rel='noopener noreferrer'>Show Me</a>
              <button className='btn btn-primary' onClick={closePrePort6} >Close Me</button>
            </div>
            <small style={{ color: "pink", fontSize: "13px" }}>Check this out, it's responsive and interactive.</small>
          </div>}
          {modalview6 && <div className='backdrop'  onClick={closePrePort6} />}
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG7} alt="img" />
          </div>
          <h3>Learners Corner</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/gboigwe/thc" className='btn' target="_blank" rel='noopener noreferrer'>Github</a>
            <button  className='btn btn-primary' onClick={showPrePort7} >Live Demo</button>
          </div>
          {modalview7 && <div className='modal'>
            <h3  >Learners Corner</h3>
            <div className="modal-img">
              <img src={IMG7} alt="learners" />
            </div>
            <div className="modal-cta">
              <a className='btn btn-primary' href="https://learnersandteachers.netlify.app" target="_blank" rel='noopener noreferrer'>Show Me</a>
              <button className='btn btn-primary' onClick={closePrePort7} >Close Me</button>
            </div>
            <small style={{ color: "pink", fontSize: "13px" }}>The learners corner is site that you have the oppotunity to learn and teach others <br /> Put your self to a productive good use today by learning or teaching</small>
          </div>}
          {modalview7 && <div className='backdrop'  onClick={closePrePort7} />}
        </article>
           
         <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG4} alt="img" />
          </div>
          <h3>Upcoming Projects</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/gboigwe" className='btn' target="_blank" rel='noopener noreferrer'>No Github</a>
            <button  className='btn btn-primary' onClick={showPrePort3} >Live Demo</button>
          </div>
          {modalview3 && <div className='modal'>
            <h3  >Upcoming Projects</h3>
            <div className="modal-img">
              <img src={IMG4} alt="img2" />
            </div>
            <div className="modal-cta">
              <a className='btn btn-primary' href="https://agedev.netlify.app" target="_blank" rel='noopener noreferrer'>Show Me</a>
              <button className='btn btn-primary' onClick={closePrePort3} >Close Me</button>
            </div>
            <small style={{ color: "pink", fontSize: "13px" }}> More projects coming up: <br /> Facebook Bot, Telegram Bot, Twitter Bot, Integrating these three into a website, one similar to amazon and then linking with amazon api. COOL RIGHT? </small>
          </div>}
          {modalview3 && <div className='backdrop'  onClick={closePrePort3} />}
        </article>

        {/* {portFolio.map(({id,img,title,github,demo,alertMsg}) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-img">
                <img src={img} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target="_blank" rel='noopener noreferrer'>Github</a>
                buttona  className='btn btn-primary' onClick={showPrePort} >Live Demo</button> href={demo} target="_blank" rel='noopener noreferrer'
              </div>
              {modalview && <Modal id={id} img={img} title={title} github={github} demo={demo} alertMsg={alertMsg} onClick={closePrePort} />}
              {modalview ? console.log({title}) : null}
              {modalview && <Backdrop onClick={closePrePort} />}
            </article>
          )
        })} */}
      </div>
    </section>
  )
}

export default Portfolio
