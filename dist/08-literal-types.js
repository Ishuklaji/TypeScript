"use strict";
// String literal types
let direction;
direction = "north"; // OK
// direction = "up"; // Error!
// Numeric literal types
let diceRoll;
function handleResponse(response) {
    if (response.status === "success") {
        console.log("Data:", response.data);
    }
    else {
        console.error("Error:", response.message);
    }
}
//# sourceMappingURL=08-literal-types.js.map