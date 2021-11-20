import React from "react";
import { Card,CardBody } from "reactstrap";
function header({name,title})
{
    return(
        <div>
            <Card className="my-1 bg-primary">
                <CardBody>
                    <h1 className="text-center my-4">Welcome To the Event Manager </h1>
                </CardBody>
            </Card>
        </div>
    );
}

export default header;