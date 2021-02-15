import React from 'react';
import { User } from 'react-feather';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const style = {
    display: 'flex',
    minWidth: '320px',
    maxWidth: '410px',
    // background: '#f7f1e3'
}

function Navigation() {
    return <div className="row justify-content-around py-3" style={style}>
        <Link to="/"><Button className="px-3 ml-4" style={{background:'#dcdde1', color:'white', border:"none"}}>Shout 모음</Button></Link>
        <Link to="/shout-add"><Button className="px-3 mr-4" style={{background:'#a4b0be', color:'white', border:"none"}}>Shout 등록</Button></Link>
        <Link to="/profile"><Button className="px-1 mr-4" style={{background:'#ffd32a', color:'white', border:"none"}}><User/></Button></Link>
    </div>
}

export default Navigation;