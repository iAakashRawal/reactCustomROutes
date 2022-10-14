import React from 'react';
import './App.css';
import { Col, Row } from 'reactstrap';
// import Sidebar from './Comp/Sidebar';
import Allroute from './Comp/Allroute';


function App() {
  return (
    <div className="mt-1">
      
      <Row>
        {/* <Col xs={2} className="p-1 ps-2">
          <Sidebar />
        </Col> */}
        <Col xs={12} className="p-0">
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
