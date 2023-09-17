import React from 'react';

const cart = ({ selectedCourse, totalCredit, totalCraditHr }) => {
    //console.log(selectedCourse)

    return (
        <>
            <div className="card w-72 bg-base-100 shadow-xl px-4">
                <h3 className="text-lg text-[#2F80ED] font-bold mt-6 mb-4">Credit Hour Remaining {totalCredit} hr</h3>
                <hr />
                <h3 className="text-xl text-[#1C1B1B] font-bold mt-4 mb-6">Course Name</h3>
                {
                    selectedCourse.map((setItem) => (
                        <li className="list-decimal list-inside text-[#1C1B1B99] pb-2 mb-1" key={setItem.id}>{setItem.title}</li>
                    ))
                }
                <hr />
                <h2 className="text-[#1C1B1BCC] font-medium my-4">Total Credit Hour : {totalCraditHr}</h2>
            </div>
        </>
    );
};

export default cart;