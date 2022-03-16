import React, {useState} from 'react'

export default function orchidInput() {

    const [orchidGenera, setOrchidGenera] = useState('')
    const [orchidSpecies, setOrchidSpecies] = useState('')
    const [growerName, setGrowerName] = useState('')
    const [careInfo, setCareInfo] = useState('')

    return (
        <div>
            <div className="heading">
                <h3>Orchids of NENYOS</h3>
                <h4>In-Bloom Uploader </h4>
            </div>
            <div className="container">
                <div className="left-container">
                    <div className="orchid-wrapper">
                        <label htmlFor="orchidGenera">Orchid Genera</label>
                        <input
                            type="text"
                            value={orchidGenera}
                            id="orchidGenera"
                            placeholder="Orchid Genera"
                            defaultValue=""
                            name="orchidGenera"
                            required={true}
                            onChange={(e) => setOrchidGenera(e.target.value)}
                        />

                        <label htmlFor="orchidSpecies">Orchid Species</label>
                        <input
                            type="text"
                            value={orchidSpecies}
                            id="orchidSpecies"
                            placeholder="Orchid Species"
                            defaultValue=""
                            name="orchidSpecies"
                            required={true}
                            onChange={(e) => setOrchidSpecies(e.target.value)}
                        />
                    </div>
                    <div className="grower-wrapper">
                        <label htmlFor="growerName">Grower Name</label>
                        <input
                            type="text"
                            value={growerName}
                            id="growerName"
                            placeholder="Grower Name"
                            defaultValue=""
                            name="growerName"
                            required={true}
                            onChange={(e) => setGrowerName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="right-container">
                    <label htmlFor="careInfo">Care Information</label>
                    <div className="grow-wrap">
                <textarea
                    value={careInfo}
                    id="careInfo"
                    name="careInfo"
                    rows={2}
                    placeholder={"Care Information"}
                    required={true}
                    defaultValue={"\t\t\t\t"}
                    onChange={(e) => setCareInfo(e.target.value)}
                />
                    </div>
                </div>
            </div>

        </div>
    );
};