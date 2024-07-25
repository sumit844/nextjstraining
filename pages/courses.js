import React, { useEffect } from "react";

import OneRowThreeColumn from "../src/components/OneRowThreeColumn";

export const getStaticProps = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    console.log("welcome");

    return {
        props: { courseData: data }
    }
}
const Courses = (props) => {


    const courseData = props.courseData;

    const totalNumberOfRows = (courseData.length) / 3;
    var chunkData = [];
    for (var i = 0; i <= totalNumberOfRows; i++) {
        chunkData.push(courseData.slice(i, i + 3));
    }

    return (
        <>
            <h1>These are courses that we are offering now.</h1>
            {
                chunkData.map((item, index) => {
                    return (
                        <div className="row">
                            {
                                item.map((newItem) => {
                                    return (
                                        <OneRowThreeColumn rowData={newItem} />
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </>
    )
}

export default Courses;