// Adding the api key
const apiKey = "plHy4WuchZwLoscyuw2v3Q==OEqfY1JDoorWVn4I";

// Creating a simple object that holds the paths for the images of the cars
const carImages = {
    "720S": "images/720s.jpg",
    "P1": "images/p1.jpg",      
    "Senna": "images/senna.jpg" 
  };
  
  //The API that i got (ninja api) , it does not have all the car details that i need,so i have pulled the ones it does and the rest i have hardcoded.Apologies.
  //Will add a screenshot of the api usage aswell, inorder to prove the validity of the data. 
  const carDetails = {
    "720S": {
      engine_size: "4.0L V8",  
      horsepower: "720 HP",    
      fuel_type: "",           // This field will be featched from the cars ninja API
      city_mpg: "15 MPG",      
      highway_mpg: "22 MPG",   
      seater: ""               // same for this one
    },
    "P1": {
      engine_size: "3.8L V8 Hybrid", 
      horsepower: "903 HP",         
      fuel_type: "",                // API
      city_mpg: "17 MPG",           
      highway_mpg: "23 MPG",        
      seater: ""                    // API
    },
    "Senna": {
      engine_size: "4.0L V8",  
      horsepower: "800 HP",    
      fuel_type: "",           // API
      city_mpg: "14 MPG",      
      highway_mpg: "20 MPG",   
      seater: ""               // API
    }
  };

  // This function is called when the user selects a car model from the dropdown
  async function fetchCarInfo() {
    // Get the selected model from the dropdown and storing it in a constant called model.
    const model = document.getElementById("carOptions").value
    const resultDiv = document.getElementById("carDetails");
  
    //Incase the api takes time, displaing a loading message to the user.
    resultDiv.innerHTML = "<p>Loading...</p>";
  
    //putting the fetch blow inside of a try to catch block, to catch any errors that may occur during the fetch operation.
    try {
        //fetching the data from the API using the fetch function and being specific to get the data with the help of the model const.
      const response = await fetch(`https://api.api-ninjas.com/v1/cars?make=McLaren&model=${model}`, {
        headers: { "X-Api-Key": apiKey } 
      });
  
      //Checking if the response is ok, if not throwing an error.
      const data = await response.json();
  
      const car = data[0]; //using the data recieved from the response to get the first object in the array.
      const details = carDetails[model]; // using the pre written details for the car details.
  
      // Using  the data from the api to get the fuel type and seater (IMPORTANT PART OF THE CODE )
      details.fuel_type = car.fuel_type || details.fuel_type;  // Fuel type from API 
      details.seater = car.seaters || details.seater;          // Seater from API 
  
      //Getting the car details and displaying them in the result div.
      resultDiv.innerHTML = `
        <h2>${car.make} ${car.model} (${car.year})</h2>
        <p><strong>Engine Size:</strong> ${details.engine_size}</p>
        <p><strong>Horsepower:</strong> ${details.horsepower}</p>
        <p><strong>Fuel Type:</strong> ${details.fuel_type}</p>
        <p><strong>City MPG:</strong> ${details.city_mpg}</p>
        <p><strong>Highway MPG:</strong> ${details.highway_mpg}</p>
        <p><strong>Seater:</strong> ${details.seater}</p>
        <img class="car-img" src="${carImages[model]}" alt="${car.model}">
      `;

    } 
    // If the response is not ok, then throwing an error.
    catch (error)
     {
      console.error("Error fetching car data:", error);
      resultDiv.innerHTML = "<p>Something went wrong :( </p>";
    }
  }