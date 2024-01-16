import './Home.css'
import image from "../pictures/cool.jpeg"
import React, {useState, useEffect} from 'react';

export default function Home(){
    const[quote,setQuote] = useState("");
    const[author,setAuthor] = useState("");
    useEffect(() => {
        fetch("http://api.quotable.io/random")
        .then(res =>res.json())
        .then(
            (quote) => {
                setQuote(quote.content)
                setAuthor(quote.author)
            }
        )
    },[]);
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
    <div id= "hidden">
    <div class ="flexbox-container">
            <p id ="name">this is a picture of a bird! it looks a bit odd, but i'm sure it's nice</p>
            <img src={image} alt="React Image" />
    </div>
    <div>
    <h1>
        {quote}
    </h1>
    <p>
        {author}
    </p>
    </div>
    </div>
    </>
    )
}