import axios from 'axios';
import React,{useEffect} from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
    Container

} from 'reactstrap';
import { toast } from 'react-toastify';
import base_url from '../server/bootapi';


const Event = ({events,update}) => {
    useEffect(() => {
        document.title = "Events";
    }, []);


    // To delete the event
    const deleteEvent=(id)=>{
        axios.delete(`${base_url}/events/${id}`).then(
            (response)=>{
                toast.success("Course deleted");
                // console.log(alert("Course has been Deleted Sucessfully"));
            update(id);

            },(error)=>{
                console.log(error);
                toast.error("Course Not deleted \n Server error");
                console.log(alert("Course Not deleted \n Server error"));
            }
        );
    };


    return (
        // <div>
        // <h1 className="text-center">Upcomming Events are.....</h1>
        <Card className="events-card my-5">
            <CardBody >
                    <b><CardTitle style={{ color: "green",fontSize:'30px'}}>{events.title}</CardTitle></b>
                <CardSubtitle className="font-weight-bold">{events.subTitle}</CardSubtitle>
                <CardText>{events.description}</CardText>
                <Container className="text-center">
                    <Button color="warning" onClick={()=>{
                        deleteEvent(events.id);
                    }}>Delete</Button>
                    <Button color ="danger" >Update</Button>
                </Container>
            </CardBody>
        </Card>
        // </div>
    );
};
export default Event;