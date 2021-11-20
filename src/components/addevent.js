import React, { Fragment,useEffect,useState} from 'react';
// import Button from '@restart/ui/esm/Button';
import { Container } from 'react-bootstrap';
// import {render} from 'react-dom';
import {Form ,FormGroup,Input,Button} from 'reactstrap';
import axios from 'axios';
import base_url from '../server/bootapi';
import { toast } from 'react-toastify';



 const Addevent =()=>{
     useEffect(() => {
         document.title = "Add Events";
        }, []);
        
        const [event,setEvent]=useState({});
        // form Hander function
        const handleForm=(e)=>{
            console.log(event);
        postDataOnServer(event);
        e.preventDefault();
    };
    const reset=()=>{
    // setEvent({ id:" ",title:" ", description: " " });
    // setEvent({ ...event, id: " "});
    // setEvent({ ...event, title: " " });
    this.setEvent({ id:' ',title:' ',description:' '})
    }
    // Creating function to postdata on server
    const postDataOnServer=(data)=>{
        axios.post(`${base_url}/events`,data).then(
            (response)=>{
                console.log(response);
                console.log("sucess");
                console.log(alert("Sucess"));
                reset();
                toast.success("Course added sucessfully");
            },(error)=>{
                console.log(error);
                console.log("error");
                toast.error("Error Something went wrong");
            }
        );
    };



    // render(
     return (
         <div className="events" style={{ marginLeft: '5em' }}>
         <Fragment >
         <h1 className="text-center py-3" >Enter the Details of Events</h1>
             <Form onSubmit={handleForm}>
                 <FormGroup className="eventid mx-5" style={{ width: '600px' }}>
                     <label for="eventId">Event Id</label>
                     <Input type ="text" 
                     placeholder="Enter Id here" 
                     name ="eventId"
                     id="eventId"
                     onChange={(e)=>{
                         setEvent({...event,id:e.target.value});
                     }}
                     />
                 </FormGroup>
                 <FormGroup className="title mx-5" style={{ width : '600px' }}>
                     <label for="title">Title</label>
                     <Input type="text"
                         placeholder="Enter Title here"
                         name="title"
                         id="title"
                             onChange={(e) => {
                                 setEvent({ ...event, title: e.target.value });
                             }}
                     />
                 </FormGroup>
                     <FormGroup className="subtitle mx-5" style={{ width: '600px' }}>
                         <label for="subtitle">Sub Title</label>
                         <Input type="text"
                             placeholder="Enter SubTitle here"
                             name="subtitle"
                             id="subtitle"
                             onChange={(e) => {
                                 setEvent({ ...event, subTitle: e.target.value });
                             }}
                         />
                     </FormGroup>
                 <FormGroup className="title mx-5" style={{ width : '600px' }}>
                     <label for="description">Description</label>
                     <Input type="textarea"
                         placeholder="Enter Description here"
                         name="description"
                         id="description"
                             onChange={(e) => {
                                 setEvent({ ...event, description: e.target.value });
                             }}
                        style={{height:'100px'}}
                     />
                 </FormGroup>

                <Container className="text-center">
                    <Button type ="submit" color="success">Add Event</Button>
                    <Button type ="reset" color="warning ml-2">Clear</Button>
                </Container>
             </Form>
         </Fragment>
         </div>
    //  );
    );
 };
 export default Addevent;
