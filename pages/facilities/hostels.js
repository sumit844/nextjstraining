import React from 'react';

export const getStaticProps=()=>{
  return {
    props:{footerStatus:true}
  }
  }
function hostels() {
  return (
    <div>
     
      <h1>This is a hostels page</h1>
      
    </div>
  )
}

export default hostels
