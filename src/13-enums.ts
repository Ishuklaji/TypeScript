// Numeric enum
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

let dir: Direction = Direction.Up;
console.log(dir); // Output: 1

// String enum
enum ResponseStatus {
  Pending = "PENDING",
  Approved = "APPROVED",
  Rejected = "REJECTED",
}

let stat: ResponseStatus = ResponseStatus.Approved;
console.log(stat); // Output: "APPROVED"

// Const enum (more performant)
const enum HttpStatus {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
}

function handleResponse(status: HttpStatus): void {
  if (status === HttpStatus.OK) {
    console.log("Success!");
  }
}
