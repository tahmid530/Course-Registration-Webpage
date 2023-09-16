import React from 'react';

const cart = ({ selectedCourse, totalCredit, totalCradithr}) => {
    console.log(selectedCourse)

    return (
        <>
         <div className="card w-72 bg-base-100 shadow-xl">
         <h3 className='mb-3'>Credit Hour Remaining {totalCredit}</h3>
         <hr />
            {
                selectedCourse.map((setItem) =>(
                    <li  key={setItem.id}>{setItem.title}</li>
                ))
            }
            <hr />
            <h2 className='mt-4'>Total Credit Hour : {totalCradithr}</h2>
         </div>
        </>
    );
};

export default cart;