import { useState, useEffect } from 'react'
import { supabase } from '../client'
import Card from '../components/Card'

const ReadCrewmates = () => {

    const [crewmates, setCrewmates] = useState([])

    useEffect(() => {
        const fetchCrewmate = async () => {
            const { data } = await supabase
                .from('Crewmates')
                .select()
                .order('created_at', { ascending: true })

            // set state of Crewmates
            setCrewmates(data)
        }

        fetchCrewmate();
    }, [])


    return (
        <div className="whole-page">
            <div>
                <h1> Your Crewmate Gallery!</h1>
                <div className="crewmate-container">
                    {
                        crewmates && crewmates.length > 0 ?
                            [...crewmates]
                                .map((crewmate, index) =>
                                    <Card
                                        key={crewmate.id}
                                        id={crewmate.id}
                                        name={crewmate.name}
                                        speed={crewmate.speed}
                                        color={crewmate.color}
                                    />
                                ) :

                            <div>
                                <h2>You haven't made a crewmate yet!</h2>
                                <br />
                                <a href="/new">
                                    <button type="button">Create one here!</button>
                                </a>
                            </div>

                    }
                </div>
            </div>
        </div>
    )
}

export default ReadCrewmates