// Code your solution in this file!

function distanceFromHqInBlocks(pickupLocation) {
 
    const hqDistance = 42;

    let blocks = (pickupLocation - hqDistance);

    return Math.abs(blocks)
}

// console.log(distanceFromHqInBlocks(50))


function distanceFromHqInFeet(pickupLocation) {

  const blocks = distanceFromHqInBlocks(pickupLocation);
  const feet = blocks * 264;

  return feet
}

// console.log(distanceFromHqInFeet(50))

function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled

    const feet = (destination - start) * 264;

    return Math.abs(feet)
  }

// console.log(distanceTravelledInFeet(1000,3000))

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const feetTravelled = distanceTravelledInFeet(start, destination);

    let fare = 0;
    if (feetTravelled > 400 && feetTravelled < 2000) {
        fare = 2* (feetTravelled-400);
    }
    else if ( feetTravelled > 2000 && feetTravelled < 2500) {
        fare = 2500;
    
    }
    else if (feetTravelled > 2500) {
        return "cannot travel that far"
    }
    return fare/100 
  }
// console.log (calculatesFarePrice(3,5))