//let Airplane = {);
export let availableAirplanes=[{name: 'AeroJet', availableStaff: ['pilots','flightAttendants','engineers','medicalAssistance','sensorOperators'], fuelCapacity: 800, maxSpeed: 1200, minSpeed: 300},{name: 'SkyJet', availableStaff: ['pilots','flightAttendants'], fuelCapacity: 500, maxSpeed: 800, minSpeed: 200}];
export let flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange: 700
};
export function meetsStaffRequirements(availableStaff, requiredStaff){if (availableStaff.length >= requiredStaff){return true} else return false}
export function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange){
  let range = maxSpeed - minSpeed;
  if (range > requiredSpeedRange){return true} else return false
}

//export {availableAirplanes, flightRequirements, meetsStaffRequirements};
// not used anymore since we exported them directly
