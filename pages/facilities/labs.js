import React from 'react';

export const getStaticProps=()=>{
return {
  props:{footerStatus:true}
}
}

function labs(props) {
  return (
    <div>
     
      <h1>This is a labs page</h1>
    
    </div>
  )
}

export default labs
