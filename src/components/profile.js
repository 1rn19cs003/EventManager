import React ,{useEffect}from 'react'

const Profile=()=> {
    useEffect(() => {
        document.title = "Profile";
    }, []);
    return (
        <div className="Profile-form py-3">
            <h1>Text Here for Profile</h1>
        </div>
    );
}

export default Profile;