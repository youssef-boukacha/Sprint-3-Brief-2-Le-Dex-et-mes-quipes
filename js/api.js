const BaseUrl = "http://localhost:3000/creatures";


export async function getCreatures() {
    try {
        const response = await fetch(`${BaseUrl}`)
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);

        }
        const creatures = await response.json();
    return creatures ;
}
    catch (error) {   console.error("Could not load Creatures:", error) }
    
 }


 export async function getCreaturesByType (creaturesByType){
try {
    const response = await fetch(`${BaseUrl}?type=${creaturesByType}`)
    if (!response.ok){
        throw new Error (`HTTP error: ${response.status}`);
    }
const types = await response.json();
return types ;
}
    catch (error) {console.error ("could not load Types:", error )}
}


export async function getCreaturesBySearch (input){
    try {
        const response = await fetch(`${BaseUrl}?name=${input}`)
   
    if (!response.ok){
                throw new Error (`HTTP error: ${response.status}`);
    }
    const searchVlue = await response.json();

    return searchVlue;
}
    catch (error) {console.error ("could not load Types:", error )}
}