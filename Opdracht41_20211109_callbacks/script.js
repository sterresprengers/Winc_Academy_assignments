const huiswerkMaken = ((vak, callback) => {
    setTimeout(() => {
        console.log(`Ok, ok, ik ga nu écht mijn ${vak} huiswerk maken`)
    }, 2000)
    callback();
})
// huiswerkMaken("wiskunde", klaarMetHuiswerk)

const klaarMetHuiswerk = () => {
    console.log("Kijk paps/mams, ik ben heus klaar met mijn huiswerk")
}

huiswerkMaken("wiskunde", klaarMetHuiswerk);