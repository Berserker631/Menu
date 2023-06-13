export interface NavItem {
  parentId?: number;
  displayName: string;
  iconName: string;
  route?: string;
  children?: NavItem[];
}
