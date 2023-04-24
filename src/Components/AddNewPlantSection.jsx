import { useState, useContext } from "react";
import { PlantContext } from "../pages/Plants";
import InputField from "./InputField";
import PrimaryButton from "./PrimaryButton";

function AddNewPlantSection() {
    const [seed, setSeed] = useState('');
    const [date, setDate] = useState('');
    const [url, setUrl] = useState('');
    const [planter, setPlanter] = useState('');

    const [myPlants, setMyPlants] = useContext(PlantContext);

    function newPlant (e) {
        e.preventDefault();
        let addNewPlant = {
            plantName: seed,
            plantDate: date,
            plantImg: url,
            plantPlanter: planter
        }
        setMyPlants([addNewPlant, ...myPlants]);
        setSeed('');
        setDate('');
        setUrl('');
        setPlanter('');
    }

    return ( 
        <section className="AddNewPlantSection">
            <h3>Ny sådd:</h3>
                <form className="newPlantInput">
                    <InputField label="Frönamn" type="text" placeholder="Tomat" action={setSeed} value={seed}/>
                    <InputField label="Datum för sådd" type="date" action={setDate} value={date}/>
                    <InputField label="URL exempelbild" type="text" placeholder="http://..." action={setUrl} value={url}/>
                    <InputField label="Planterare" type="text" placeholder="Emma på 4:an" action={setPlanter} value={planter}/>
                    <PrimaryButton title="LÄGG TILL" action={newPlant}/>
                </form>
        </section>
     );
}

export default AddNewPlantSection;