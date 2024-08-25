// Object mapping single-character direction codes to their full names
const baseDirections = {
  N: "North",
  E: "East",
  S: "South",
  W: "West",
};

// Function to convert a direction code into a readable format
const getDirection = (direction) => {
  // Split the direction string into individual characters
  // Map each character to its corresponding full name from baseDirections
  // Join the resulting array with '-' to create a formatted string
  const newdirection = direction
    .split("") // Split the input string into an array of characters
    .map((char) => baseDirections[char]) // Map each character to its full name
    .join("-"); // Join the array into a single string with '-' as separator

  return newdirection; // Return the formatted direction string
};

export default getDirection; // Export the function for use in other modules
