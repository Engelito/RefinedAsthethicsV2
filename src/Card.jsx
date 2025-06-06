import profilePic from './assets/GarrettProfile.png'
import profilePic2 from './assets/profilepic02.png'
function Card(){
    return(
        <>
        <div className="card">
            <img className="card-image" src={profilePic} alt="Garrett picture"></img>
            <h2 className="card-title">Garrett Murdoch</h2>
            <p className="card-text">Body builder</p>
        </div>
         <div className="card">
            <img className="card-image" src={profilePic2} alt="Angel picture"></img>
            <h2 className="card-title">Angel Gonzalez</h2>
            <p className="card-text">Developer</p>
        </div>
        </>

    );
}
export default Card