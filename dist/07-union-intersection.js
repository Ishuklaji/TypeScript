"use strict";
function updateStatus(status) {
    console.log(`Status updated to: ${status}`);
}
updateStatus("approved"); // valid
// updateStatus("completed"); // invalid
let currentStatus = "pending"; // valid
function printId(id) {
    if (typeof id === "string") {
        console.log(`ID (string): ${id.toUpperCase()}`);
    }
    else {
        console.log(`ID (number): ${id}`);
    }
}
let myCircle = {
    color: "red",
    radius: 10,
};
//# sourceMappingURL=07-union-intersection.js.map