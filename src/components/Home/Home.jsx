import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart'
import Swal from 'sweetalert2'
const Home = () => {

    const [allCourse, setCourse] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState([]);
    const [totalCredit, setCredit] = useState([])
    const [totalCraditHr, setTotalCradit] = useState([0])

    useEffect(() => {
        fetch("./data.json")
            .then(res => res.json())
            .then((data) => setCourse(data))
    }, [])


    const handleSelectCourse = (course) => {

        const isExist = selectedCourse.find(item => item.id == course.id)

        let count = parseInt(course.credit);

        if (isExist) {
            Swal.fire('COURSE ALREADY EXISTS')
        }
        else {
            selectedCourse.forEach((item) => {
                count = parseInt(count) + parseInt(item.credit)
            });


            const totalRemaining = 20 - count; 
            

            if (count > 20) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'You can not add more then 20 credit',
                })
            }

            else {
                setTotalCradit(count);
                setCredit(totalRemaining);
                setSelectedCourse([...selectedCourse, course]);
            }
        }
    }

    return (
        <>
            <h1 className="text-[#1C1B1B] text-center text-3xl font-bold mt-12 mb-8">Course Registration</h1>

            <div className="flex gap-6 justify-evenly mb-20">
                <div className="card grid grid-cols-3 gap-6">
                    {
                        allCourse.map(course => (

                            <div key={course.id} className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src={course.image} alt="" /></figure>
                                <div className="card-body items-center">
                                    <h2 className="card-title">
                                        {course.title}
                                    </h2>
                                    <p>
                                        {course.description}
                                    </p>
                                    <div className="card-actions gap-6">
                                        <div className="flex items-center gap-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M12 1V23" stroke="#1C1B1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="#1C1B1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p> <span>Price:</span>{course.price}</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M12 6.042C10.3516 4.56336 8.2144 3.74694 6 3.75C4.948 3.75 3.938 3.93 3 4.262V18.512C3.96362 18.172 4.97816 17.9989 6 18C8.305 18 10.408 18.867 12 20.292M12 6.042C13.6483 4.56328 15.7856 3.74685 18 3.75C19.052 3.75 20.062 3.93 21 4.262V18.512C20.0364 18.172 19.0218 17.9989 18 18C15.7856 17.9969 13.6484 18.8134 12 20.292M12 6.042V20.292" stroke="#1C1B1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p>Credit : {course.credit}</p>
                                        </div>

                                    </div>

                                    <button onClick={() => handleSelectCourse(course)} className="btn btn-wide text-white bg-[#2F80ED] hover:bg-black">Select</button>

                                </div>
                            </div>
                        ))
                    }
                </div>
                <div>
                    <Cart selectedCourse={selectedCourse} totalCredit={totalCredit} totalCraditHr={totalCraditHr} ></Cart>
                </div>
            </div>
        </>
    );
};

export default Home;