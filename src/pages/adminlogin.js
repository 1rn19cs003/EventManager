import React, { useEffect } from 'react';
const Adminlogin=()=> {
    useEffect(() => {
        document.title = "Admin Login";
    }, []);
    return (
        <div>
            <form className="text-left my-3 mx-5">
                <h1 className="text-center">Admin Login</h1>
                <div className="mb-4" style={{ width: '400px' }}>
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3" style={{ width: '400px' }}>
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}


export default Adminlogin;
