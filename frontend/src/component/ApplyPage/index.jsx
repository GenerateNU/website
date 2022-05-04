import React, { useEffect, useState } from 'react'
import Categories from "./categories";
import Search from './Search';
import { findAllCategories } from '../../services/categoryService';


export default function ApplyPage() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            const data = await findAllCategories();
            setCategories(data);
        };
        getCategories();
    }, []);

    return (
        <div className="ap_container">
            <div className="ap_img"></div>
            <div className="ap_text">WE VIBE HARD AND <br></br>  MAKE THINGS</div>
            <div className='d-flex'>
                <div className="ap_text2 col-6 me-5 pe-5">
                We’re always looking for passionate individuals who are ready to learn and grow. 
                We have opportunities that run broad and deep. If you don’t see anything right now drop an email and we’ll let you know when posiitons open up again.
                </div>
                <div className='col-4 h-100'>
                    <div className='space-above-search'></div>
                    <Search className=''/>
                </div>
            </div>
            <Categories categories={categories} />
        </div>
    );
}