import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart'
import Swal from 'sweetalert2'
const Home = () => {

    const [allCourse, setCourse] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState([]);
    const [totalCredit, setCredit]= useState([])
    const [totalCradithr, setTotalCradit]= useState([0])

    useEffect(() => {
        fetch("./data.json")
            .then(res => res.json())
            .then((data) => setCourse(data))
    }, [])
    

    const selectCourse = (course) =>{

        const isExist = selectedCourse.find(item => item.id == course.id)

        
        let count = parseInt(course.credit) ;

        

        if (isExist) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
              })
        }
        else{
            selectedCourse.forEach((item) => {
                count = parseInt(count) + parseInt(item.credit)
            });
          
            
            const totalDue = 20 - count;
            setTotalCradit(count)
            if( count > 20){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href="">Why do I have this issue?</a>'
                  })
            }
            else{
                setCredit(totalDue)
                setSelectedCourse([...selectedCourse, course])
            }
        }
        
        
       
    }
    
    return (
        <>
        <h1 className='text-2xl text-center font-medium m-2'>Course Registration</h1>
            <div className='container flex '>

                <div className="card grid grid-cols-3 gap-4"> */
                    {
                        allCourse.map(course => (

                            <div key={course.id} className="card w-96 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={course.image} alt="" />
                                </figure>
                                <div className="card-body items-center text-left">
                                    <h2 className="text-[#1C1B1B] text-lg font-semibold">{course.title}</h2>
                                    <p className="text-[#1C1B1B99] text-sm">{course.description}</p>
                                    <div className="flex text-[#1C1B1B99] font-medium gap-4">
                                        <h3>Price: {course.price}</h3>
                                        <h3>Credit: {course.credit}</h3>
                                    </div>
                                    <button onClick={() => selectCourse(course)} className="btn btn-wide bg-[#2F80ED] text-[white] hover:bg-black">Select</button>
                                </div>
                            </div>

                        ))
                    }
                </div>
                <div>
                    <Cart selectedCourse={selectedCourse} totalCredit={totalCredit} ></Cart>
                </div>
            </div>
        </>
    );
};

export default Home;