import React, { useState } from 'react';
export default function Navbar(props) {
    const [text, setText] = useState("HY");

    const handleOnClick = () => {
        console.log("HY");
        setText("KNOW MORE");
    };
    return (<section className='banner'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-5'>
                    <div className='sideheader'>
                        <h1>{props.title}</h1>
                        <h2>landing page</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        <a href="/">{text}</a>
                        <button onClick={handleOnClick}>Click on</button>
                    </div>
                </div>
                <div className='col-lg-7'>
                    <div className='image1'>
                        <img src='/images/newsave.png' alt='' />
                    </div>
                </div>
            </div>
        </div>
    </section>
    )


}