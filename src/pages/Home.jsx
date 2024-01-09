import './Home.css'
import image from "../pictures/cool.jpeg"
import React, { useEffect} from 'react';

export default function Home(){
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry)
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show')
                }
            });
        });
        
        const hiddenElements = document.querySelectorAll(".hidden");
        hiddenElements.forEach((el) => observer.observe(el));
    }, []);
    
    return (
    <>
    <section class = "hidden">
    <div class ="flexbox-container">
            <p id ="name">this is a picture of a bird! it looks a bit odd, but i'm sure it's nice</p>
            <img src={image} alt="React Image" />
    </div>
    </section>
    </>
    )
}