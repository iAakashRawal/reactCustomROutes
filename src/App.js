// import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { Col, Label, Row } from 'reactstrap';
import View from './Comp/View';
import Sidebar from './Comp/Sidebar';
import Allroute from './Comp/Allroute';
import { useState } from 'react';


function App() {
  const [path , setPath] = useState()
  return (
    <div className="mt-5">
      
      <Row>
        <Col xs={2}>
          <Sidebar />
        </Col>
        <Col xs={10}>
          <div className='p-3 shadow h-100'>
            <Allroute />
          </div>
        </Col>
      </Row>
      
      {/* </header> */}
    </div>
  );
}

export default App;
