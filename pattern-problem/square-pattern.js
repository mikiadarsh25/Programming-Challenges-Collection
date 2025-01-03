function print_square(n) {
    for (let i = 1; i <= n; i++) {
        let line = ""; // Initialize an empty string for each line
        for (let j = 1; j <= n; j++) {
            // Add "*" for borders and " " for inside
            if (i === 1 || i === n || j === 1 || j === n) {
                line += "*";
            } else {
                line += " ";
            }
        }
        console.log(line); // Print the entire row
    }
}

// Driver Code
let rows = 6;
print_square(rows);
