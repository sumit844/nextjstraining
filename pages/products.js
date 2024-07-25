import React from 'react';
import Link from 'next/link';

export const getServerSideProps = async () => {

    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    console.log("welcome");

    return {
        props: { courseData: data }
    }

}
function products(props) {
    const courseData = props.courseData;
    return (
        <>
            <h1>These are products Category.</h1>
            <ul>
                {
                    courseData.map((item, index) => {

                        var ids="products/"+item.id;
                        return (
                            <Link href={ids}> <li> {item.category}</li></Link>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default products
