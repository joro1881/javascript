function championship(arr){
    let map = new Map();

    for( let obj of arr){
        let[teamName, pilotName, pilotPoints] = obj.split(' -> ');

        if(!map.has(teamName)){
            map.set(teamName, new Map())
        }
        if(!map.get(teamName).has(pilotName)){
            map.get(teamName).set(pilotName,+pilotPoints);
        }
        else{
            map.get(teamName)
                .set(pilotName,
                    map.get(teamName).get(pilotName)+Number(pilotPoints));
        }
    }

    let sortedMap = [...map].sort((a,b) => [...b[1].values()]
        .reduce((a,b) => a+b) - [...a[1].values()]
        .reduce((a,b) => a+b));

    for(let [team, pilot] of sortedMap){
        console.log(`${team}: ${[...pilot.values()].reduce((a,b)=> a+b)} `)
        let sortedPilots = [...pilot].sort((a,b)=>b[1]-a[1]);
        for(let [pilot, points] of sortedPilots){
            console.log(`-- ${pilot} -> ${points}`)
        }
    }

}

//what we learnt
// [...map] - parsing array-like object to arr
// Object.entries(arr)[0] - left [1] right

championship(["Ferrari -> Kimi Raikonnen -> 25",
    "Ferrari -> Sebastian Vettel -> 18",
    "Mercedes -> Lewis Hamilton -> 10",
    "Mercedes -> Valteri Bottas -> 8",
    "Red Bull -> Max Verstapen -> 6",
    "Red Bull -> Daniel Ricciardo -> 4"]);