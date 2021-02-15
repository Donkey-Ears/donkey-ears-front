import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardBody } from 'reactstrap';
import { getShout } from "../redux/actions/shout"

const shoutStyle = {
    borderTop: "none",
    // borderBottom: "1px dashed #2f3640",
    borderLeft: "none",
    borderRight: "none",
    borderRadius: "0"
}
class Home extends Component {
    componentDidMount() {
        this.props.getShout()
    }
    render() {
        return (
            <>
            <Card className="m-2">
            <CardBody>
            <Card className="p-1 pb-2" style={shoutStyle}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printe took a galley of type and scrambled it to make a type specimen book.
                </Card>
            </CardBody>
            <CardBody>
            <Card className="p-1 pb-2" style={shoutStyle}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printe took a galley of type and scrambled it to make a type specimen book.
            </Card>
            </CardBody>
            <CardBody>
            <Card className="p-1 pb-2" style={shoutStyle}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printe took a galley of type and scrambled it to make a type specimen book.
            </Card>
            </CardBody>
            </Card>
            </>
        );
    }
}


const mapDispatchToProps = (state) => {
    return {
        shoutList: state.shout.shoutList
    }
}

export default connect(mapDispatchToProps, {
    getShout,
})(Home)