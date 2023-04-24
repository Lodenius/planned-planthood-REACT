import AddNewPlantSection from "./AddNewPlantSection";
import RoundImage from "./RoundImage";

function PlannedPlants() {
    return ( 
        <section className="plannedPlantsContainer">
            <div className="line"></div>
            <h2>Lägg till planerade plantor</h2>
            <article className="plannedPlants">
                <AddNewPlantSection />
                <RoundImage url="https://images.unsplash.com/photo-1597868165956-03a6827955b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBsYW50aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
            </article>
            <div className="line"></div>
        </section>
     );
}

export default PlannedPlants;