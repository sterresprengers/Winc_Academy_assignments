async function awaitGetData () {
    const fetchedData = await getData()
    console.log("Fetching worked", fetchedData)
    // return fetchedData
}
awaitGetData()