const baseDirections = {
  N: "North",
  E: "East",
  S: "South",
  W: "West",
};
const getDirection = (direction) => {
  const newdirection = direction.split("").map((char)=>baseDirections[char]).join('-');
 
  return newdirection;
};

export default getDirection;
