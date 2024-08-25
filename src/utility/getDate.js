// Function to format a date into a readable string
const getDate = (data) => {
  const date = new Date(data); // Create a Date object from the input string or timestamp
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ]; // Array of month abbreviations

  const day = date.getDate(); // Get the day of the month (1-31)
  const month = date.getMonth(); // Get the month (0-11, hence no need for +1)
  const year = date.getFullYear(); // Get the year (e.g., 2024)

  // Format the date into a string: "day month year"
  const date_obj = `${day} ${months[month]} ${year}`;

  return date_obj; // Return the formatted date string
};

// Function to get the name of the day of the week based on index
const getDay = (i) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]; // Array of day names

  return days[i]; // Return the day name corresponding to the index
};

// Export both functions for use in other modules
export { getDate, getDay };
