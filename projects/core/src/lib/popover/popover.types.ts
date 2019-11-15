export interface PopoverPosition {
  top: number;
  left: number;
  bottom: number;
  right: number;
  targetWidth: number;
  targetHeight: number;
  vertical: PopoverVerticalAlign;
  horizontal: PopoverHorizontalAlign;
}

export type PopoverHorizontalAlign = 'left' | 'right';
export type PopoverVerticalAlign = 'top' | 'bottom';
export type PopoverPositioning = 'auto' | 'above' | 'below' | 'left' | 'right';
export type PopoverArrowPositioning = 'auto' | 'center';
