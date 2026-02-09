export const sortWithSoldLast = <T extends { sold?: boolean }>(arr: T[]) =>
    [...arr].sort((a, b) => (a.sold ? 1 : 0) - (b.sold ? 1 : 0));
