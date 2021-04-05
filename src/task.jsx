import React from "react";
import Button from 'react-bootstrap/Button'

export default function RadioButtonsGroup() {
    const handleClick = () => {
        const butts = document.getElementsByClassName("butt");
        for (let i = 0; i < butts.length; i++) {
            butts[i].classList.toggle("active");
        }
    };
    return (
        <form>
            <h4>Add Coupon Code</h4>
            <div className='radio_butts'>
                <div className='butt active' onClick={handleClick}>
                    <span className='out'>
                        <span className='in'></span>
                    </span>
                    <p>Single Coupon Code</p>
                </div>
                <div className='butt' onClick={handleClick}>
                    <span className='out'>
                        <span className='in'></span>
                    </span>
                    <p>Bulk Coupon Code</p>
                </div>
            </div>
            <div className='input_field'>
                <p>Enter Name</p>
                <input type='text' placeholder='Input text' />
            </div>
            <div className='input_field'>
                <p>Enter Coupon Code</p>
                <input type='text' placeholder='Input text' />
            </div>
            <p>Type of Discount</p>
            <div className='discount'>
                <div>
                    <input type='radio' name='discount' />
                    <p>Percentage discount</p>
                </div>
                <input type='text' placeholder='Enter Discount' />
            </div>

            <div className='discount'>
                <div>
                    <input type='radio' name='discount' />
                    <p>Fixed Amount discount</p>
                </div>
            </div>
            <br />
            <br />
            <div className='checks'>
                <div className='check'>
                    <div>
                        <input
                            type='checkbox'
                            onChange={(e) => {
                                let ele = document.getElementById("inp-1");
                                if (e.target.checked) {
                                    ele.style.display = "block";
                                } else ele.style.display = "none";
                            }}
                        />
                        <p>
                            Limit the number of times the code can be redeemed
                        </p>
                    </div>
                    <input
                        type='text'
                        id='inp-1'
                        placeholder='Enter Number'
                        style={{
                            display: "none",
                        }}
                    />
                </div>
                <div className='check'>
                    <div>
                        <input
                            type='checkbox'
                            onChange={(e) => {
                                let ele = document.getElementById("inp-2");
                                if (e.target.checked) {
                                    ele.style.display = "block";
                                } else ele.style.display = "none";
                            }}
                        />
                        <p>Add an expiry date</p>
                    </div>
                    <input
                        type='date'
                        id='inp-2'
                        placeholder='Selected Date'
                        style={{
                            display: "none",
                        }}
                    />
                </div>
                <div className='check'>
                    <div>
                        <input
                            type='checkbox'
                            onChange={(e) => {
                                let ele = document.getElementById("inp-3");
                                if (e.target.checked) {
                                    ele.style.display = "block";
                                } else ele.style.display = "none";
                            }}
                        />
                        <p>Limit to specific courses</p>
                    </div>
                    <input
                        type='text'
                        id='inp-3'
                        placeholder='Input Text'
                        style={{
                            display: "none",
                        }}
                    />
                </div>
            </div>
            <>
            <div className="mb-2" >
                <Button variant="primary" size="lg">
                 Cancel
                </Button>{' '}
                <Button variant="secondary" size="lg">
                Save
                </Button>
            </div>
            </>
        </form>
    );
}
