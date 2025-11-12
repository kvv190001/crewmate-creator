import { useState } from 'react'
import { supabase } from '../client'
import crewmates from '../assets/crewmates.png'

const CreateCrewmate = () => {
    const [crewmate, setCrewmate] = useState({ name: "", speed: "", color: "" })

    const handleChange = (event) => {
        const { name, value } = event.target
        setCrewmate((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    const createCrewmate = async (event) => {
        event.preventDefault();

        await supabase
            .from('Crewmates')
            .insert({ name: crewmate.name, speed: crewmate.speed, color: crewmate.color })
            .select()

        window.location = "/";
    }

    return (
        <div className="whole-page">
            <div>
                <h1>Create a New Crewmate</h1>
                <img src={crewmates} height="100px" width="auto" />
                <br />
                <form className="form-container">
                    <div className="mini-container">
                        <label><h3>Name:</h3></label>
                        <input type="text" name="name" placeholder="Enter crewmate's name" value={crewmate.name} onChange={handleChange}/>
                    </div>
                    <div className="mini-container">
                        <label><h3>Speed (mph):</h3></label>
                        <input type="text" name="speed" placeholder="Enter speed in mph" value={crewmate.speed} onChange={handleChange}/>
                    </div>
                    <div className="mini-container">
                        <label><h3>Color:</h3></label>
                        <li><input id="Red" name="color" type="radio" value="Red" onChange={handleChange}/>Red</li>
                        <li><input id="Green" name="color" type="radio" value="Green" onChange={handleChange}/>Green</li>
                        <li><input id="Blue" name="color" type="radio" value="Blue" onChange={handleChange}/>Blue</li>
                        <li><input id="Purple" name="color" type="radio" value="Purple" onChange={handleChange}/>Purple</li>
                        <li><input id="Yellow" name="color" type="radio" value="Yellow" onChange={handleChange}/>Yellow</li>
                        <li><input id="Orange" name="color" type="radio" value="Orange" onChange={handleChange}/>Orange</li>
                        <li><input id="Pink" name="color" type="radio" value="Pink" onChange={handleChange}/>Pink</li>
                        <li><input id="Rainbow" name="color" type="radio" value="Rainbow" onChange={handleChange}/>Rainbow</li>
                    </div>
                </form>
                <button onClick={createCrewmate}>Create Crewmate</button>
            </div>
        </div>
    )
}

export default CreateCrewmate