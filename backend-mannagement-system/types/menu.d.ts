interface Menu {
  title?: string;
  icon?: string;
  isClick?: boolean;
  route?: string;
}

interface IMenu extends Menu {
  children?: Menu[];
}

export type { IMenu };
