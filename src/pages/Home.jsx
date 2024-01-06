import './Home.css'
import image from "../pictures/cool.jpeg"

export default function Home(){
    return (
    <>
    <div class ="ok">
            <p id ="name">this is a picture of a bird! it looks a bit odd, but i'm sure it's nice</p>
            <img src={image} alt="React Image" />
    </div>
    </>
    )
}