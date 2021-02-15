import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { login, changeUserInfo } from "../redux/actions/login"
import {connect} from "react-redux";
import { Link } from 'react-router-dom';

const inputStyle = {
    width: '90%',
    margin: '0 auto'
}

class Login extends Component {

    handleChange = (target) =>  {
        this.props.changeUserInfo(target.name, target.value)
    }
    handleClick = () => {
        const { username, password } = this.props.userInfo;
        this.props.login(username, password);    
    }
    render() {
        return (
            <Form>
                <FormGroup>
                    <Label className="ml-2 text-secondary">아이디</Label>
                    <Input name="username" 
                        // value={this.props.userInfo.username}
                        onChange={(e) => this.handleChange(e.target)} style={inputStyle}></Input>
                    <Label className="ml-2 text-secondary">비밀번호</Label>
                    <Input name="password" 
                        onChange={(e) => this.handleChange(e.target)}  style={inputStyle}></Input>
                </FormGroup>
                <FormGroup>
                    <Row className="justify-content-around">
                        <Link to="/sign-up"><Button color="secondary">회원가입</Button></Link>
                        <Button color="primary"
                            onClick={() => this.handleClick()}
                        >로그인</Button>
                    </Row>
                 </FormGroup>
            </Form>
        );
    }
}


const mapDispatchToProps = (state) => {
    return {
        userInfo: state.login.userInfo
    }
}

export default connect(mapDispatchToProps, {
    login,
    changeUserInfo
})(Login)