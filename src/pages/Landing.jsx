import crewmate from '../assets/crewmates.png'
import spaceship from '../assets/spaceship.png'

export const Landing = () => {
    return (
        <div className="whole-page">
            <div>
                <div className="home-page">
                    <h1> Welcome to the Crewmate Creator!</h1>
                    <h3> Here is where you can create your very own set of crewmates before sending them off into space! </h3>
                    <img src={crewmate} className="welcome-images" />
                    <br />
                    <img src={spaceship} className="welcome-images" />
                </div>
            </div>
        </div>
    )
}
