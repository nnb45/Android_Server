exports.getAll = async () => {
    return categories;
}

exports.getDetail = async (id) => {
    const category = categories.find(category => category.id == id);
    if (!category) {
        return null;
    }
    return category;
}

exports.update = async (id, category_name, category_desc) => {
    // update categories set category_name = category_name, category_desc = category_desc
    // where id = id
    const removeById = (categories, id) => {
        const requiredIndex = categories.findIndex(el => {
            return el.id == id;
        });
        if (requiredIndex === -1) {
            return false;
        };
        return !!categories.splice(requiredIndex, 1);
    };
    removeById(categories, id);

    // add again
    const model = categories.push({ id, category_name, category_desc });
    return model;
}

exports.create = async (category_name, category_desc) => {

    // insert into categories (category_name, category_desc) 
    // values (category_name, category_desc)
    const id = Math.floor(10 + Math.random() * 100);
    const model = categories.push({ id, category_name, category_desc });
    return model;
}

exports.delete = async (id) => {
    // delete from category where id = id
    const removeById = (categories, id) => {
        const requiredIndex = categories.findIndex(el => {
            return el.id == id;
        });
        if (requiredIndex === -1) {
            return false;
        };
        return !!categories.splice(requiredIndex, 1);
    };
    removeById(categories, id);
}

const categories = [{
    "id": 1,
    "category_name": "Ezechiel",
    "category_desc": "Subluxation of distal interphalangeal joint of l idx fngr"
}, {
    "id": 2,
    "category_name": "Bertine",
    "category_desc": "Other non-follicular lymphoma, intra-abdominal lymph nodes"
}, {
    "id": 3,
    "category_name": "Ximenez",
    "category_desc": "Dislocation of tarsal joint of left foot, sequela"
}, {
    "id": 4,
    "category_name": "Nettie",
    "category_desc": "Occup of 3-whl mv inj in clsn w ped/anml nontraf, sequela"
}, {
    "id": 5,
    "category_name": "Scarface",
    "category_desc": "Nondisp transverse fx shaft of r rad, 7thJ"
}, {
    "id": 6,
    "category_name": "Amie",
    "category_desc": "Other multiple births, all liveborn"
}, {
    "id": 7,
    "category_name": "Breanne",
    "category_desc": "Effects of abnormal gravitation [G] forces, sequela"
}, {
    "id": 8,
    "category_name": "Burnard",
    "category_desc": "Unsp injury of unsp pulmonary blood vessels, subs encntr"
}, {
    "id": 9,
    "category_name": "Caroline",
    "category_desc": "Puncture wound w/o foreign body of right upper arm, sequela"
}, {
    "id": 10,
    "category_name": "Lonnie",
    "category_desc": "Puncture wound with foreign body of unsp hand, init encntr"
}, {
    "id": 11,
    "category_name": "Norina",
    "category_desc": "Adverse effect of mixed antiepileptics, subsequent encounter"
}, {
    "id": 12,
    "category_name": "Dacia",
    "category_desc": "Papyraceous fetus, unspecified trimester, fetus 2"
}, {
    "id": 13,
    "category_name": "Saudra",
    "category_desc": "Strike/struck by front passenger side automobile airbag"
}, {
    "id": 14,
    "category_name": "Kin",
    "category_desc": "Twin liveborn infant, delivered vaginally"
}, {
    "id": 15,
    "category_name": "Jamaal",
    "category_desc": "Chronic lacrimal canaliculitis"
}, {
    "id": 16,
    "category_name": "Wiatt",
    "category_desc": "Burn unsp deg of shldr/up lmb, ex wrs/hnd, unsp site, init"
}, {
    "id": 17,
    "category_name": "Alisun",
    "category_desc": "Rapidly progr nephritic syndrome w minor glomerular abnlt"
}, {
    "id": 18,
    "category_name": "Con",
    "category_desc": "Adverse effect of saline and osmotic laxatives"
}, {
    "id": 19,
    "category_name": "Michel",
    "category_desc": "Occup of hv veh inj in clsn w nonmtr vehicle nontraf, sqla"
}, {
    "id": 20,
    "category_name": "Sanders",
    "category_desc": "Nondisp fx of lateral condyle of l humer, 7thP"
}, {
    "id": 21,
    "category_name": "Shurlock",
    "category_desc": "Displ spiral fx shaft of ulna, r arm, 7thP"
}, {
    "id": 22,
    "category_name": "Mario",
    "category_desc": "External constriction of left ear, subsequent encounter"
}, {
    "id": 23,
    "category_name": "Ynes",
    "category_desc": "Disp fx of second metatarsal bone, unsp foot, init"
}, {
    "id": 24,
    "category_name": "Gae",
    "category_desc": "Nonrheumatic pulmonary valve disorders"
}, {
    "id": 25,
    "category_name": "Kelcy",
    "category_desc": "Maternal care for (suspected) cnsl malform in fetus, fetus 2"
}, {
    "id": 26,
    "category_name": "Carr",
    "category_desc": "Intentional self-harm by shotgun discharge"
}, {
    "id": 27,
    "category_name": "Huey",
    "category_desc": "Foreign body granuloma of soft tissue, NEC, unsp upper arm"
}, {
    "id": 28,
    "category_name": "Elinor",
    "category_desc": "Breakdown (mechanical) of implanted penile prosthesis, init"
}, {
    "id": 29,
    "category_name": "Bertram",
    "category_desc": "Sltr-haris Type IV physl fx lower end ulna, left arm, init"
}, {
    "id": 30,
    "category_name": "Brant",
    "category_desc": "Unsp injury of musc/fasc/tend prt biceps, left arm, init"
}];