import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label, Row } from 'reactstrap';


const inputStyle = {
    width: '90%',
    margin: '0 auto'
}

class SignUp extends Component {

    handleChange = (target) => {
        console.log(target);
    }
    render() {
        return (
            <Form>
                <FormGroup>
                    <Label className="ml-2 text-secondary">아이디</Label>
                    <Input name="username" onChange={(e) => this.handleChange(e.target)} style={inputStyle}></Input>
                </FormGroup>
                <FormGroup>
                    <Label className="ml-2 text-secondary">비밀번호</Label>
                    <Input name="password" onChange={(e) => this.handleChange(e.target)}  style={inputStyle}></Input>
                </FormGroup>
                <FormGroup>
                    <Label className="ml-2 text-secondary">연령</Label>
                    <Input type="select" name="age" onChange={(e) => this.handleChange(e.target)}  style={inputStyle}>
                        <option value="10s">10대</option>
                        <option value="20s">20대</option>
                        <option value="30s">30대</option>
                        <option value="40s">40대</option>
                    </Input>
                </FormGroup>
                <FormGroup tag="fieldset">
                    <Label className="ml-2 text-secondary">성별</Label>
                    <Row className="justify-content-around">
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="gender" />{' '}
                            남
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="gender" />{' '}
                            여
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="gender" />{' '}
                            무관
                        </Label>
                    </FormGroup>
                    </Row>
                </FormGroup>
                <FormGroup>
                    <Row className="justify-content-around">
                        <Button color="primary">가입하기</Button>
                    </Row>
                 </FormGroup>
            </Form>
        );
    }
}

export default SignUp;