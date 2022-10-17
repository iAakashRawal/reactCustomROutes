import React from 'react';
import './App.css';
import { Col, Row } from 'reactstrap';
// import Sidebar from './Comp/Sidebar';
import Allroute from './Comp/Allroute';
import Sidebar from './Comp/Sidebar';


function App() {
  return (
    <div className="mt-1">
      
      <Row>
        <Col xs={2} className="p-1">
          <Sidebar />
        </Col>
        <Col xs={10} className="p-0">
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
