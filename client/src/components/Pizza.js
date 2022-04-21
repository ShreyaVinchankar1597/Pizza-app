import React, {useState} from 'react'
import {Modal, Button} from 'react-bootstrap'

export default function ({pizza}) {
    const [size, setSize] = useState('small')
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    }

    const handleShow = () => {
        setShow(true);
    }

    return (
      <>
        <div>{pizza.name}</div>
        <img src={pizza.image} onClick={handleShow}/>
        <div className='flex-container'>
            <div className='w-100'>
                <span> Size : </span>
                <select value={size} onChange={(e)=>{setSize(e.target.value)}}>
                    {pizza.sizes.map(size => {
                        return <option value={size}> {size} </option>
                    })}
                </select>
            </div>
        </div>
        <div> Price : {pizza.prices[0][size]}</div>
        <div className='btn cart-button'> ADD TO CART </div>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
      </>
    
  )
}
