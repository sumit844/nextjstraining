import React from 'react'
import Image from 'next/image'


function OneRowThreeColumn(props) {
    var rowData = props.rowData;
    return (
        <div className="pt-5 pb-5 col-lg-4 col-md-6 col-sm-12">
            <div class="card-group">
                <div class="card">
                    <img src={rowData.image} class="card-img-top" alt="..." width={200} height={300} />
                    <div class="card-body">
                        <h5 class="card-title">{rowData.title}</h5>
                        <p class="card-text">{rowData.description}</p>
                    </div>
                    <div className="container">
                        <div className='row'>
                        <div className=" col-6">
                            <p>price:{rowData.price}</p>
                        </div>
                        <div className=" col-6">
                            <p className="text-end">Rating:{rowData.rating.rate}</p>
                        </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <small class="text-body-secondary">Last updated 3 mins ago</small>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default OneRowThreeColumn
