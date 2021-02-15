import React, { Component } from 'react';
import { Button, Card, CardBody, CardSubtitle, CardTitle, Input } from 'reactstrap';

class Shout extends Component {
    render() {
        return (
            <Card className="m-2">
                <CardTitle className="ml-2 mt-2 mb-0" style={{fontWeight: "500"}}>Shout 등록</CardTitle>
                <CardBody className="p-2"><Input type="textarea" rows="5"/></CardBody>
                <CardSubtitle className="text-right mr-2 mb-2 mt-1"><Button style={{background:"#40739e",  border:"none"}}>등록</Button></CardSubtitle>
            </Card>
        );
    }
}

export default Shout;