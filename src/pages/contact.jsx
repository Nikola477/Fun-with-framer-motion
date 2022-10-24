import React from 'react';
import { Row, Col, Form, FormGroup, FormLabel, FormControl, Button, ListGroup, ListGroupItem  } from 'react-bootstrap';

const Contact = () => {
    
    const handleSubmit = (event) => {

    };
    
    return (
    <div className='contact'>
        
       <h2>Contact</h2> 
       <Row>
        <Col>
         <div className='contact-form'>
            <Form onSubmit={handleSubmit}>
                <FormGroup className="mb-3" controlId="validationCustom01">
                    <FormLabel>Name</FormLabel>
                    <FormControl required type="text" pleaceholder="Name" />
                </FormGroup>
                <FormGroup className="mb-3" controlId="validationCustom02">
                    <FormLabel>Name</FormLabel>
                    <FormControl required type="email" pleaceholder="email" />
                </FormGroup>
                <FormGroup className="mb-3" controlId="validationCustom02">
                    <FormLabel>Message</FormLabel>
                    <FormControl required as="textarea" pleaceholder="Message" />
                </FormGroup>
                <Button type="submit">Submit Form</Button>
            </Form>
            </div>
        </Col>
        <Col>
          <div className='contact-data'>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing 
          elit. Aenean commodo ligula eget dolor. Aenean massa 
          <strong>strong</strong>. Cum sociis natoque penatibus 
          et magnis dis parturient montes, nascetur ridiculus 
          mus. Donec quam felis, ultricies nec, pellentesque 
          eu, pretium quis, sem. Nulla consequat massa quis 
          enim. Donec pede justo, fringilla vel, aliquet nec, 
          vulputate eget, arcu. In enim justo, rhoncus ut, 
          imperdiet a, venenatis vitae, justo. Nullam dictum 
          felis eu pede mollis pretium. Integer tincidunt. 
          Cras dapibus. Vivamus elementum semper nisi. </p>

          <p>
            <ListGroup horizontal>
                 <ListGroupItem> <a href = "">Youtube</a></ListGroupItem>
                 <ListGroupItem> <a href = "">Linkedin</a></ListGroupItem>
                 <ListGroupItem> <a href = "">Instagram</a></ListGroupItem>
                 <ListGroupItem> <a href = "">Facebook</a></ListGroupItem>
            </ListGroup>
          </p>
          </div>
        </Col>
       </Row>

    </div>
    )
}

export default Contact;