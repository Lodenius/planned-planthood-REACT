import { useContext } from "react";
import PlantCard from "../Components/PlantCard";
import PlantedPlantsButton from "../Components/PlantedPlantsButton";
import { PlantContext } from "../pages/Plants";

function OurPlannedPlants() {

  const [myPlants] = useContext(PlantContext)

    return ( 
        <section className="OurPlannedPlants">
            <h2>Våra planerade planteringar:</h2>
            <section className="plantCards">
                { myPlants.map((plant, i) => <PlantCard plant={plant} key={i} />)}
            </section>
            <PlantedPlantsButton />
        </section>
     );
}

export default OurPlannedPlants;
