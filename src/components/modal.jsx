import React from 'react'

const Modal = (props) => {
const handleClose=(e)=>{
    let newClass = e.target.closest('.list-item')
    newClass.classList.remove('flex')

}
  return (
    <div className='modal'>
        <div className="inner">
            <img src={props.src} alt='img'/>
            <h2>{props.title}</h2>

            <span className='close' onClick={handleClose}>X</span>
        </div>
    </div>
  )
}

export default Modal