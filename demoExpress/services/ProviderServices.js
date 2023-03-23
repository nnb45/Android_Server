exports.getAll = async () => {
    return providers;
}

exports.getDetail = async (id) => {
    const provider = providers.find(provider => provider.id == id);
    if (!provider) {
        return null;
    }
    return provider;
}

const providers = [
    {
        "id": 1,
        "provider_name": "Tadeas",
        "provider_desc": "Revision of Drainage Device in Left Eye, Open Approach"
    },
    {
        "id": 2,
        "provider_name": "Peadar",
        "provider_desc": "Beam Radiation of Other Bone using Photons <1 MeV"
    },
    {
        "id": 3,
        "provider_name": "Zaneta",
        "provider_desc": "Dilate L Popl Art, Bifurc, w 4+ Intralum Dev, Perc"
    },
    {
        "id": 4,
        "provider_name": "Harriette",
        "provider_desc": "Dilation of Anus with Intraluminal Device, Open Approach"
    },
    {
        "id": 5,
        "provider_name": "Errick",
        "provider_desc": "Release Right Acetabulum, Percutaneous Approach"
    },
    {
        "id": 6,
        "provider_name": "Cassie",
        "provider_desc": "Removal of Synth Sub from Finger Nail, Extern Approach"
    },
    {
        "id": 7,
        "provider_name": "Delainey",
        "provider_desc": "Extirpation of Matter from Pharynx, Endo"
    },
    {
        "id": 8,
        "provider_name": "Aurora",
        "provider_desc": "Dilation of Cecum, Percutaneous Endoscopic Approach"
    },
    {
        "id": 9,
        "provider_name": "Sebastian",
        "provider_desc": "Removal of Drain Dev from Hepatobil Duct, Open Approach"
    },
    {   
        "id": 10,
        "provider_name": "Guillemette",
        "provider_desc": "Heart and Great Vessels, Restriction"
    }]