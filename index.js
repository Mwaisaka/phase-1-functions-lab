// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation) {
    //returns the number of blocks given a value
    
    const hqInBlocks=42;
    let distanceInBlocks;
    if(hqInBlocks>pickUpLocation){
        distanceInBlocks=hqInBlocks-pickUpLocation;
        return distanceInBlocks;
    }
    distanceInBlocks=pickUpLocation-hqInBlocks;
    return distanceInBlocks; 
  };

  function distanceFromHqInFeet(pickUpLocation) {
    let numberOfBlocksFromHq=distanceFromHqInBlocks(pickUpLocation);
    const feetPerBlock=264;
    let distanceInFeet;
    distanceInFeet=numberOfBlocksFromHq*feetPerBlock;

    return distanceInFeet;   
  }

  function distanceTravelledInFeet(start, destination){
    //returns the number of feet traveled
    
    let distanceTravelledInFeet;
    if(start>destination){
        distanceTravelledInFeet=(start-destination)*264;
        return distanceTravelledInFeet;
    }
        distanceTravelledInFeet=(destination-start)*264;
        return distanceTravelledInFeet; 
  }
  
 function  calculatesFarePrice(start, destination){
    if(start>destination){
        distanceTravelledInFeet=(start-destination)*264;
    }
    else if(start<destination){
        distanceTravelledInFeet=(destination-start)*264;
    }
    //const dist=distance-400;
    if(distanceTravelledInFeet<=400){
        return 0;
    }
    else if(distanceTravelledInFeet>400 && distanceTravelledInFeet<=2000){
        return (distanceTravelledInFeet-400)*0.02;
    }
    else if(distanceTravelledInFeet>2000 && distanceTravelledInFeet<=2500){
        return 25;
    }
    else if(distanceTravelledInFeet>2500){
        return`cannot travel that far`;
    }
 }
