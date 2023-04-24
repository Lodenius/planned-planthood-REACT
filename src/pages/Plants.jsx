import OurPlannedPlants from "../Components/OurPlannedPlants";
import PlannedPlants from "../Components/PlannedPlants";
import PlantTips from "../Components/PlantTips";
import { createContext, useState } from 'react';

export const PlantContext = createContext();

function Plants() {

    
    const plantList = [
        {
          plantName:'Monstera',
          plantDate: 'YYYY-MM-DD',
          plantImg: 'https://images.unsplash.com/photo-1623325943583-d658515e0889?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80',
          plantPlanter: 'Pelle'
        },
        {
          plantName:'Succulent',
          plantDate: 'YYYY-MM-DD',
          plantImg: 'https://images.unsplash.com/photo-1531668897726-0338038642f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=721&q=80',
          plantPlanter: 'Maja'
        },
        {
          plantName:'Tomat',
          plantDate: 'YYYY-MM-DD',
          plantImg: 'https://images.unsplash.com/photo-1596199050105-6d5d32222916?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          plantPlanter: 'Freija'
        },
        {
          plantName:'Kål',
          plantDate: 'YYYY-MM-DD',
          plantImg: 'https://images.unsplash.com/photo-1477434779629-a454c123dcd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          plantPlanter: 'Philippa'
        },
        {
          plantName:'Paprika',
          plantDate: 'YYYY-MM-DD',
          plantImg: 'https://images.unsplash.com/photo-1505725513549-477dfcbe55c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          plantPlanter: 'Sandra'
        },
        {
          plantName:'Chilli',
          plantDate: 'YYYY-MM-DD',
          plantImg: 'https://images.unsplash.com/photo-1518006959466-0db0b6b4c1d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          plantPlanter: 'Måns'
        }]
    
    const [myPlants, setMyPlants] = useState(plantList);

    return ( 
        <PlantContext.Provider value={[myPlants, setMyPlants]}>
            <PlantTips />
            <PlannedPlants />
            <OurPlannedPlants />
        </PlantContext.Provider>
     );
}

export default Plants;