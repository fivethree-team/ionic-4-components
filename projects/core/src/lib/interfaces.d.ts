export type AppBarTitleMode = 'hide' | 'show' | 'active-only';
export type AppBarFabPosition = 'right' | 'left' | 'center';
export class FeaturePosition {
  top: number;
  left: number;
  height: number;
  width: number;
}

export interface Navigateable {
  dismiss();
}
