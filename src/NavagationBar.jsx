import './NavagationBar.css'
function NavagationBar(){
    return(
        <>
        <nav>
            <h1 id= "name">
                Samir Sanchez Tejada
            </h1>
            <div>
                <ul id ="navbar">
                    <li><a href="#/Home">Home</a> </li>
                    <li><a href="#/More">More</a></li>
                    <li><a href="#/Stuff">Stuff</a></li>
                    <li><a href="#/Cool">Cool</a></li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default NavagationBar