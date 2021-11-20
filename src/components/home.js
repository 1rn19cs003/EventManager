import React, { useEffect } from 'react';

const Home = () => {

    useEffect(() => {
        document.title = "Home";
    }, []);
    return (
        <div className="text-center my-0 my-5">
            <div class="container">
                <div class="calender">
                    <div class="month">
                        <i class="fas fa-angle-left prev"></i>
                        <div class="date">
                            <h1> </h1>
                            <p></p>
                        </div>
                        <i class="fas fa-angle-right next"></i>
                    </div>
                    <div class="weekdays">
                        <div>Sun</div>
                        <div>Mon</div>
                        <div>Tue</div>
                        <div>Wed</div>
                        <div>Thu</div>
                        <div>Fri</div>
                        <div>Sat</div>
                    </div>
                    <div class="days"></div>
                </div>
            </div>
            
        </div>
    );
}


export default Home;