import { useNavigate } from 'react-router-dom';

function PlantedPlantsButton() {
    const navigate = useNavigate();

    return ( 
        <button onClick={() => navigate('../pages/PlantInfo.jsx')} className="PlantedPlantsButton">Planterade plantor</button>
    );
}

export default PlantedPlantsButton;