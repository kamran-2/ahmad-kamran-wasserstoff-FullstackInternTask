const getClimate = (str)=>{
    const newstr = str.replace(/_/g,' ');
    const returnStr = newstr.charAt(0).toUpperCase() + newstr.slice(1);
    return returnStr;
}

export default getClimate;