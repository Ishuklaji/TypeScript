// union types (OR)
type Status = "pending" | "approved" | "rejected";

function updateStatus(status: Status): void {
  console.log(`Status updated to: ${status}`);
}

updateStatus("approved"); // valid
// updateStatus("completed"); // invalid

let currentStatus: Status = "pending"; // valid
// let currentStatus: Status = "completed"; // invalid  

type StringOrNumber = string | number;

function printId(id: StringOrNumber): void {
  if (typeof id === "string") {
    console.log(`ID (string): ${id.toUpperCase()}`);
  } else {
    console.log(`ID (number): ${id}`);
  }
}

// intersection types (AND)
interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

type ColorfulCircle = Colorful & Circle;

let myCircle: ColorfulCircle = {
  color: "red",
  radius: 10,
};
