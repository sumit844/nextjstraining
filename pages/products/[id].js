import React from 'react'
export const getServerSideProps = async (context) => {
  // We can not use router in server side props
  var id = context?.query?.id;
  if (id <= 20) {
    var pageDataResponse = await fetch(process.env.API_Base_URL + id);
    var pageData = await pageDataResponse.json();
    return {
      props: { res: pageData }
    }
  } else {
    return {
      props: { res: null }
    }
  }
}

function ProductsNew({ res }) {
  return <>
    {(res !== null) ? (
      <div className="pt-5 pb-5 col-lg-4 col-md-6 col-sm-12">
        <div class="card-group">
          <div class="card">
            <img src={res.image} class="card-img-top" alt="..." width={200} height={300} />
            <div class="card-body">
              <h5 class="card-title">{res.title}</h5>
              <p class="card-text">{res.description}</p>
            </div>
            <div className="container">
              <div className='row'>
                <div className=" col-6">
                  <p>price:{res.price}</p>
                </div>
                <div className=" col-6">
                  <p className="text-end">Rating:{res.rating.rate}</p>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <small class="text-body-secondary">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
    ) : (<>
      <h1>Your Object is null</h1>
    </>)}
  </>
}
export default ProductsNew
