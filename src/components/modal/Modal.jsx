import React from 'react'
import "./modal.css"
import port from "../../assets/portF4.jpg"
import IMG4 from "../../assets/portF4.jpg"

// const modalPort = [
//   {
//     // id: 1,
//     img: IMG4,
//     title: 'Basic HTML, CSS, Portfolio',
//     demo: "https://agetech.netlify.com",
//     alert: "Basic Web development. What do you think?"
//   },
//   {
//     // id: 2,
//     img: IMG4,
//     title: 'Audit Firm Site',
//     demo: "https://agetech.netlify.com",
//     alert: "Please note that this site is no longer used by the company name, but it is a done project"
//   },
//   {
//     // id: 3,
//     img: IMG4,
//     title: 'Facebook Messenger Bot',
//     demo: "https://agetech.netlify.com",
//     alert: "Please note that this facebook bot can be used for any smart business Artificial Intelligence. e.g Restaurant Interactor, Customer Relationship, Quick Response Bot, and many more"
//   },
//   {
//     // id: 4,
//     img: IMG4,
//     title: 'Dictionary App',
//     demo: "https://agetech.netlify.com",
//     alert: "You can check this out, API reference to RANDOM API and DICTIONARY API."
//   },
//   {
//     // id:5,
//     img: IMG4,
//     title: 'Church Site',
//     demo: "https://agetech.netlify.com",
//     alert: "This Site is still under constrution and may or may not look completed, as the organization interested is not yet ready but the work has started"
//   },
//   {
//     // id: 6,
//     img: IMG4,
//     title: 'My Personal Portfolio',
//     demo: "https://agetech.netlify.com",
//     alertMsg: "Check this out, it's responsive and interactive."
//   }
// ]

const Modal = (props) => {

  const closeModal = () => {
    props.onCancel();
  }

  // const closeModal = () => {
  //   props.onCancel();
  // } {show,id,title,img,demo,alertMsg,onCancel}

  return (
    <div className='modal'>

      {/* <div key={id}>
        <h3 style={{ color: "var(--color-bG-variant)" }} >{title}</h3>
        <div className="modal-img">
          <img src={img} alt="" />
        </div>
        <div className="modal-cta">
          <a className='btn btn-primary' href={demo} target="_blank">Show Me</a>
          <a className='btn btn-primary' onClick={closeModal} >Close Me</a>
        </div>
        <p style={{ color: "red" }}>{alertMsg}</p>
      </div> */}

      {/* <h3 style={{ color: "var(--color-bG-variant)" }} >{props.title}</h3>
      <div className="modal-img">
        <img src={props.img} alt="" />
      </div>
      <div className="modal-cta">
        <a className='btn btn-primary' href={props.demo} target="_blank">Show Me</a>
        <a className='btn btn-primary' onClick={closeModal} >Close Me</a>
      </div>
      <p style={{ color: "red" }}>{props.alertMsg}</p> */}

      {/* {modalPort.map((data) => {
        return(
          <div key={data.id}>
            <h3 style={{ color: "var(--color-bG-variant)" }} >{data.title}</h3>
            <div className="modal-img">
              <img src={data.img} alt="" />
            </div>
            <div className="modal-cta">
              <a className='btn btn-primary' href={data.demo} target="_blank">Show Me</a>
              <a className='btn btn-primary' onClick={closeModal} >Close Me</a>
            </div>
            <p style={{ color: "red" }}>{data.alertMsg}</p>
          </div>
        )
      })} */}
    </div>
  )
}

export default Modal