import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

class Profile extends Component {
    render() {
        return (
            <div>
                유저정보가 없습니다
                <br/>
                로그인해주세요
                <br/><br/>
                <Link to="/login"><Button className="px-1 mr-4" color="primary">로그인하러 가기</Button></Link>
            </div>
        );
    }
}

export default Profile;