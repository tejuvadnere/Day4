//qs.6

while (!false) {
    let num = prompt(`Enter the number`);
    if (num < 101) {
      console.log("Number: " + num);
      break;
    } else {
      console.log("Number: " + num);
      continue;
    }
  }