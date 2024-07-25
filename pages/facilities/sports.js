import React from 'react';

export const getStaticProps=()=>{
    return {
      props:{footerStatus:true}
    }
    }
function sports() {
    return (
        <div>
           
            <h1>This is a Sports Page</h1>
           
        </div>
    )
}

export default sports
