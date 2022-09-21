const url = "http://localhost:7575/employee/getEmployees"

loadIntoTable = async (url,table)=> {
  const tableHead = table.querySelector("thead")
  const tableBody = table.querySelector("tbody")
  const response = await fetch(url)
  console.log(response)
  const data = response.json()
  console.log(data)
}

loadIntoTable("",document.querySelector("table") )