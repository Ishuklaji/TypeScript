declare let direction: "north" | "south" | "east" | "west";
declare let diceRoll: 1 | 2 | 3 | 4 | 5 | 6;
type SuccessResponse = {
    status: "success";
    data: any;
};
type ErrorResponse = {
    status: "error";
    message: string;
};
type ApiResponse = SuccessResponse | ErrorResponse;
declare function handleResponse(response: ApiResponse): void;
//# sourceMappingURL=08-literal-types.d.ts.map