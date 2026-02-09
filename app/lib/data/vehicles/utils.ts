export type VehicleWithSold = { sold?: boolean };

export const sortWithSoldLast = <T extends VehicleWithSold>(arr: T[]) =>
    [...arr].sort((a, b) => (a.sold ? 1 : 0) - (b.sold ? 1 : 0));
