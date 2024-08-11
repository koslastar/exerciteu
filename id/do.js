function rectangularSpiral(size) {
    // Validate the size (must be a positive integer)
    if (size <= 0 || !Number.isInteger(size)) {
        throw new Error("Size must be a positive integer");
    }

    // Initialize the center point
    const centerX = Math.floor(size / 2);
    const centerY = Math.floor(size / 2);

    // Directions: right, up, left, down
    const directions = [
        [1, 0],   // right
        [0, -1],  // up
        [-1, 0],  // left
        [0, 1]    // down
    ];

    // Initialize variables
    let x = centerX;
    let y = centerY;
    let step = 1;
    let dirIndex = 0;

    // Store the coordinates of the spiral
    const spiral = [[x, y]];

    while (spiral.length < size * size) {
        for (let i = 0; i < 2; i++) { // Each direction needs to be handled twice
            for (let j = 0; j < step; j++) {
                x += directions[dirIndex][0];
                y += directions[dirIndex][1];

                if (spiral.length < size * size) {
                    spiral.push([x, y]);
                }
            }
            dirIndex = (dirIndex + 1) % 4; // Move to the next direction
        }
        step++;
    }

    return spiral;
}

// Example usage
const size = 5;
const spiralPath = rectangularSpiral(size);
console.log(spiralPath);
