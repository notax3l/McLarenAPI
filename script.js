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
  