function generatePyramid(height, char = "*", alignment = "left") {
    const pyramidContainer = document.getElementById("pyramid-container");
    pyramidContainer.innerHTML = "";

    for (let i = 1; i <= height; i++) {
        let row = "";
        // Add indentation
        const indentation = " ".repeat(height - i);
        row += indentation;

        // Add characters or symbols
        if (i === 1 || i === height) {
            // First and last rows are always filled
            row += char.repeat(2 * i - 1);
        } else {
            // Middle rows are hollow
            row += char + " ".repeat(2 * (i - 1) - 1) + char;
        }

        const pyramidRow = document.createElement("div");
        pyramidRow.classList.add("pyramid-row");
        pyramidRow.textContent = row;
        pyramidContainer.appendChild(pyramidRow);
    }

    // Adjust alignment
    pyramidContainer.style.textAlign = alignment;
}

// Call the function
generatePyramid(12, "*", "center");