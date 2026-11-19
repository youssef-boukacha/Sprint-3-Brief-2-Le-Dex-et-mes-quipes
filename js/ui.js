const grid = document.querySelector("#grid")
const filters = document.getElementById("filters");
const mobileFilter = document.getElementById("mobile-filter");

export function displayCreatures (poke){
grid.innerHTML="";
poke.forEach(creature => {
    grid.innerHTML += `
            <div class="bg-white rounded-xl p-4 shadow data-id="${creature.id}"">
 
         <p>${creature.id}</p>
        
                <img
                    src="${creature.image}"
                    alt="${creature.name}"
                    class="w-24 h-24 object-contain"
                >

                <h3 class="font-bold">${creature.name}</h3>

                <p>${creature.type}</p>


            </div>
        `;

    });
}
    
    
export function  Createbuttons (creatures){
const types = [... new Set (creatures.map(creature => creature.type))]
filters.innerHTML = `   <button type="button" class="chip bg-ink text-white border-ink shrink-0" data-type="all">
            Tous
        </button>`
        types.forEach(type =>{
            const button = document.createElement("button")
            button.type = "button"
            button.className = "chip shrink-0";
            button.textContent= type;
            button.dataset.type = type;
            
            
            filters.appendChild(button);

            const option = document.createElement("option")
            option.value= type;
            option.textContent= type;
            mobileFilter.appendChild(option);

        })}
