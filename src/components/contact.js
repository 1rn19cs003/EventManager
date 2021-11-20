import React ,{useEffect}from 'react'

const Contact =()=>
{
    useEffect(() => {
        document.title = "Contact";
    }, []);
    return (
        <div className="contact-form py-3">
            <h1>Text Here for Contact</h1>
        </div>
    );
}

export default Contact;