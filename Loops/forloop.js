//for loop with break keyword
for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        console.log("Number 6 detected");
      break; // Exits the loop when i is 6
    }
    console.log(i);
  }

  //it directly goes out of the scope


//for loop with continue keyword

for (let i = 1; i <= 10; i++) {
    if (i === 4) {
      continue; // Skips the rest of the code when i is 4
    }
    console.log(i);
  }

//example of nested loop with break statement

//When break is executed, it only exits the inner loop
//The outer loop continues its next iteration

for (let i = 1; i <= 3; i++) {
    console.log(`Outer loop iteration: ${i}`);
    
    for (let j = 1; j <= 5; j++) {
      if (j === 4) {
        break; // Exits the inner loop when j is 4
      }
      console.log(`  Inner loop iteration: ${j}`);
    }
  }
