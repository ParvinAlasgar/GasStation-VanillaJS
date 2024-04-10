let diesel = 24.53,
  petrol = 22.25,
  lpg = 11.1;
const newLine = "\r\n";
const fuelText =
  "1-Diesel" +
  newLine +
  "2-Petrol" +
  newLine +
  "3-LPG" +
  newLine +
  "Choose fuel types";

let fuelType = prompt(fuelText);
if (fuelType == "1" || fuelType == "2" || fuelType == "3") {
  let fuelLitr = Number(prompt("Enter fuel litr"));
  let money = Number(prompt("Enter own money"));
  if (fuelType == "1") {
    let toPaid = diesel * fuelLitr;
    if (money > toPaid) {
      money = money - toPaid;
      alert("Succefully paided" + newLine + "Money:" + money);
    } else
      alert(
        "Money not enought" +
          newLine +
          "To paid:" +
          toPaid +
          newLine +
          "Money:" +
          money +
          newLine +
          "Not enought money:" +
          (toPaid - money)
      );
  } else if (fuelText == "2") {
    let toPaid = petrol * fuelLitr;
    if (money > toPaid) {
      money = money - toPaid;
      alert("Succefully paided" + newLine + "Money:" + money);
    } else
      alert(
        "Money not enought" +
          newLine +
          "To paid:" +
          toPaid +
          newLine +
          "Money:" +
          money +
          newLine +
          "Not enought money:" +
          (toPaid - money)
      );
  } else if (fuelText == "3") {
    let toPaid = lpg * fuelLitr;
    if (money > toPaid) {
      money = money - toPaid;
      alert("Succefully paided" + newLine + "Money:" + money);
    } else
      alert(
        "Money not enought" +
          newLine +
          "To paid:" +
          toPaid +
          newLine +
          "Money:" +
          money +
          newLine +
          "Not enought money:" +
          (toPaid - money)
      );
  }
} else {
  alert("Choose correct fuel type");
}
