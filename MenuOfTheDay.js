const arr = [
  "Spaghetti and Meatballs",
  "Sushi",
  "Pancakes and Waffles",
  "Pizza",
  "Tacos",
  "rilled Chicken Salad",
  "Sandwich and Burger",
];
const MenuForTheDay = (Day) => {
  switch (Day.toLowerCase()) {
    case "monday":
      console.log("Monday Menu: " + arr[0]);
      break;
    case "tuesday":
      console.log("Tuesday Menu: " + arr[1]);
      break;
    case "wednesday":
      console.log("Wednesday Menu: " + arr[2]);
      break;
    case "thursday":
      console.log("Thursday Menu: " + arr[3]);
      break;
    case "friday":
      console.log("Friday Menu: " + arr[4]);
      break;
    case "saturday":
      console.log("Saturday Menu: " + arr[5]);
      break;
    case "sunday":
      console.log("Sunday Menu: " + arr[6]);
      break;
    default :
    console.log("Invalid Day of The Week! Thankyou")
  }
};
MenuForTheDay("tuesday");
