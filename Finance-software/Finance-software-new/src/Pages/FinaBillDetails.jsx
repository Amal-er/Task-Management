import React from 'react'
import FinanceSidenav from '../Components/FinanceSidenav';
import Header from '../Components/Header';

function  FinaBillDetails() {
  return (
    <div className='admin-dashboard'>
    <Header />
    <div style={{ display: 'flex', flexDirection: 'row', height: '100vh',  }}>
        
        <div style={{ width: '200px', backgroundColor: '#fff', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' }}>
          <FinanceSidenav /> 
        </div>

        
        <div style={{ flexGrow: 1, padding: '10px 10px', }}>
    <div className="bill-container">
    <div className="buttons-group">
        <button className="btn-download">Download</button>
        <button className="btn-cancel">Cancel</button>
      </div>
   </div>
    </div>
    </div>
    </div>
  )
}

export default FinaBillDetails
