import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../client'
import crewmates from '../assets/crewmates.png'

const EditCrewmate = () => {
    const { id } = useParams()
    const [crewmate, setCrewmate] = useState({ name: "", speed: "", color: "" })

    useEffect(() => {
        const fetchCrewmate = async () => {
            const { data } = await supabase
                .from('Crewmates')
                .select('*')
                .eq('id', id)
                .single()

            // set state of Crewmates
            setCrewmate(data)
        }

        fetchCrewmate();
    }, [id])


    const handleChange = (event) => {
        const { name, value } = event.target
        setCrewmate((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    const updateCrewmate = async (event) => {
        event.preventDefault();

        await supabase
            .from('Crewmates')
            .update({ name: crewmate.name, speed: crewmate.speed, color: crewmate.color })
            .eq('id', id);

        window.location = "/gallery";
    }

    const deleteCrewmate = async (event) => {
        event.preventDefault();

        await supabase
            .from('Crewmates')
            .delete()
            .eq('id', id);

        window.location = "/gallery";
    }

    return (
        <div className="whole-page">
            <div>
                <h1>Update Your Crewmate</h1>
                <img src={crewmates} height="100px" width="auto" />
                <br />
                <h2>Current Crewmate Info:</h2>
                <h3>Name: {crewmate.name}, Speed: {crewmate.speed}, Color: {crewmate.color}</h3>
                <br />
                <form className="form-container">
                    <div className="mini-container">
                        <label><h3>Name:</h3></label>
                        <input type="text" name="name" placeholder="Enter crewmate's name" value={crewmate.name} onChange={handleChange} />
                    </div>
                    <div className="mini-container">
                        <label><h3>Speed (mph):</h3></label>
                        <input type="text" name="speed" placeholder="Enter speed in mph" value={crewmate.speed} onChange={handleChange} />
                    </div>
                    <div className="mini-container">
                        <label><h3>Color:</h3></label>
                        <li><input id="Red" name="color" type="radio" value="Red" onChange={handleChange} />Red</li>
                        <li><input id="Green" name="color" type="radio" value="Green" onChange={handleChange} />Green</li>
                        <li><input id="Blue" name="color" type="radio" value="Blue" onChange={handleChange} />Blue</li>
                        <li><input id="Purple" name="color" type="radio" value="Purple" onChange={handleChange} />Purple</li>
                        <li><input id="Yellow" name="color" type="radio" value="Yellow" onChange={handleChange} />Yellow</li>
                        <li><input id="Orange" name="color" type="radio" value="Orange" onChange={handleChange} />Orange</li>
                        <li><input id="Pink" name="color" type="radio" value="Pink" onChange={handleChange} />Pink</li>
                        <li><input id="Rainbow" name="color" type="radio" value="Rainbow" onChange={handleChange} />Rainbow</li>
                    </div>
                </form>
                <button onClick={updateCrewmate}>Update Crewmate</button>
                <button onClick={deleteCrewmate}>Delete Crewmate</button>
            </div>
        </div>
    )
}

export default EditCrewmate