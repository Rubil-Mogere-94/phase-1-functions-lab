// Code your solution in this file!
// Function to calculate distance from headquarters in blocks
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42; // Headquarters is on 42nd street
    return Math.abs(pickupLocation - hqLocation);
  }
  
  // Function to convert distance from blocks to feet
  function distanceFromHqInFeet(pickupLocation) {
    const feetPerBlock = 264; // 1 block = 264 feet
    return distanceFromHqInBlocks(pickupLocation) * feetPerBlock;
  }
  
  // Function to calculate distance traveled in feet between two locations
  function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    return Math.abs(destination - start) * feetPerBlock;
  }
  
  // Function to calculate fare price
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0; // Free for the first 400 feet
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat rate for distances over 2000 feet up to 2500 feet
    } else {
      return 'cannot travel that far'; // No rides over 2500 feet
    }
  }
  
  // Export functions for testing
  module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice
  };
  