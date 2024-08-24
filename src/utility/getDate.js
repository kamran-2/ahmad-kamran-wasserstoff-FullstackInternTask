const getDate = (data) => {
  const date = new Date(data);
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
  ];


  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are 0-indexed in JavaScript
  const year = date.getFullYear();
  const date_obj = `${day} ${months[month]} ${year}`;
  return date_obj
};

const getDay = (i)=>{
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return days[i];
}
export { getDate,getDay };
