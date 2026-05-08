type Status = "pending" | "approved" | "rejected";
declare function updateStatus(status: Status): void;
declare let currentStatus: Status;
type StringOrNumber = string | number;
declare function printId(id: StringOrNumber): void;
interface Colorful {
    color: string;
}
interface Circle {
    radius: number;
}
type ColorfulCircle = Colorful & Circle;
declare let myCircle: ColorfulCircle;
//# sourceMappingURL=07-union-intersection.d.ts.map