
const fs = require("fs")
const path = require("path")
const CSVToJSON = require('csvtojson');


// CSVToJSON().fromFile('./JavaProject.csv').then(data=>console.log(data))


csvFileReader = async () => {
  return await CSVToJSON().fromFile('./JavaProject(2)(1).csv')
  
}


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