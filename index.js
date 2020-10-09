
const fs = require("fs")
const CSVToJSON = require('csvtojson'); //This library converts the CSV file to Josn 


// CSVToJSON().fromFile('./JavaProject.csv').then(data=>console.log(data))




//This asynchronus function reads the csv file, converts it to the json and wraps it inside a promise and returns that promise
csvFileReader = async () => {
  return await CSVToJSON().fromFile('./JavaProject(2)(1).csv')
  
}



//This asynchronous function calls the above function and gets a promise, it accesses resolved data by awaiting it
// and then loops through each item in the json and prints all required properties
dataPrinterFunction = async () =>{
	let totalFixedCost = null
	let totalActualhours = null
	const convertedToJson = await csvFileReader()
	convertedToJson.forEach((item)=>{
		console.log(`Task Name:\t ${item["TASK NAME"]}`)
		console.log(`Status of The Task: ${item.STATUS}`)
		console.log(`Task Priority:\t ${item.PRIORITY}`)
		console.log(`Task Deadline:\t ${item.DEADLINE}`)
		console.log(`Fixed Cost: \t${item["FIXED COST"]}`)
		console.log(`Actual Hours:\t ${item["ACTUAL HRS"]}`)
		console.log(`\n \n`)


	})

	convertedToJson.forEach((item) => {
		totalFixedCost = totalFixedCost + parseInt(item["FIXED COST"].replace('$',"").replace(',',""))
		totalActualhours = totalActualhours + parseInt(item["ACTUAL HRS"])
	})


	console.log(`Total Fixed Cost is: \t ${totalFixedCost}`)
	console.log(`Total Actual Hours are:  ${totalActualhours}`)

}

dataPrinterFunction()