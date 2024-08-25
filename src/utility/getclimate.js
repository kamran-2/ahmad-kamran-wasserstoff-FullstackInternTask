// Function to format climate descriptions
const getClimate = (str) => {
  // Replace underscores with spaces in the input string
  const newstr = str.replace(/_/g, " ");

  // Capitalize the first character of the modified string
  const returnStr = newstr.charAt(0).toUpperCase() + newstr.slice(1);

  // Return the formatted string
  return returnStr;
};

export default getClimate;
