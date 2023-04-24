import DeleteButton from "../Components/DeleteButton";

function PlantCard({plant}) {

    return ( 
        <section className="singlePlantCard">
            <section>
                <div className="ourPlantImg">
                    <img src={plant.plantImg} />
                </div>
            </section>
            <section className="ourPlantInfo">
                <h3>{plant.plantName}</h3>
                <h5>{plant.plantDate}</h5>
                <p>{plant.plantPlanter}</p>
                <DeleteButton />
            </section>
        </section>
     );
}

export default PlantCard;