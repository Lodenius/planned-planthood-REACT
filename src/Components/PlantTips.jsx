import PrimaryButton from "./PrimaryButton";
import RoundImage from "./RoundImage";

function PlantTips() {
    return ( 
        <section className="plantTipsSection">
            <RoundImage url="https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
        <section className="plantTipsInfo">
            <h2>Säsong att så</h2>
            <p>Våren är äntligen här i kollektivet! Lorem ipsum dolor, sit amet consectetur adipisicing elit. sit amet consectetur adipisicing elit.</p>
            <section className="tipsButton">
                <PrimaryButton title="SÅ-TIPS"/> 
            </section>
        </section>
        </section>
     );
}

export default PlantTips;