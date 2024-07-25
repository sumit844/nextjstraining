import React from 'react';

export const getStaticProps=()=>{
  return {
    props:{footerStatus:true}
  }
  }
function food() {
  return (
    <div>
     
      <h1>This is a Food Page</h1>
      
    </div>
  )
}

export default food
