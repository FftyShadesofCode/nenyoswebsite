const data = {
    orchids: require('../data/orchids.json'),
    setOrchids: function (data) { this.orchids = data}
}

const getAllOrchids = (req, res) => {
    res.json(data.orchids)
}

const createNewOrchid = (req, res) => {
    const newOrchid = {
        id: data.orchids[data.orchids.length - 1].id + 1 || 1,
        orchidGenera: req.body.orchidGenera,
        orchidSpecies: req.body.lastName,
        fragrant: req.body.fragrant,
        temp: req.body.temp,
        lightIntensity: req.body.lightIntensity,
        lightType: req.body.lightType,
        water: req.body.water,
        humidity: req.body.humidity,
        location: req.body.location
    }

    if (!newOrchid.orchidGenera || !newOrchid.orchidSpecies) {
        return res.status(400).json({ 'message': 'Orchid Genera and Orchid Species are required.' })
    }

    data.setOrchids([...data.orchids, newOrchid])
    res.status(201).json(data.orchids)
}

const updateOrchids = (req, res) => {
    const orchid = data.orchids.find(orchid => orchid. parseInt(req.body.id))
    if (!orchid) {
        return res.status(400).json({ "message": `Orchid ${req.body.id} not found.`})
    }
    if (req.body.orchidGenera) orchid.orchidGenera = req.body.orchidGenera
    if (req.body.orchidSpecies) orchid.orchidSpecies = req.body.orchidSpecies
    const filteredArray = data.orchids.filter(orchid => orchid.id !== parseInt(req.body.id))
    const unsortedArray = [...filteredArray, orchid]
    data.setUsers(unsortedArray.sort((a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
    res.json(data.orchids)
}

const deleteOrchid = (req, res) => {
    const orchid = data.orchids.find(orchid => orchid.id === parseInt(req.body.id))
    if (!orchid) {
        return res.status(400).json({ "message": `Orchid ${req.body.id} not found.`})
    }
    const filteredArray = data.orchids.filter(orchid => orchid.id !== parseInt(req.body.id))
    data.setOrchids([...filteredArray])
    res.json(data.orchids)
}

const getOrchid = (req, res) => {
    const orchid = data.orchids.find(orchid => orchid.id === parseInt(req.params.id))
    if (!orchid) {
        return res.status(400).json({ "message": `Orchid ${req.params.id} not found.`})
    }
    res.json(orchid)
}

module.exports = {
    getAllOrchids,
    createNewOrchid,
    updateOrchids,
    deleteOrchid,
    getOrchid
}