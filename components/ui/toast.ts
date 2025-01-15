export type ToastActionElement = React.ReactNode;
export interface ToastProps {
  open: boolean;
  onOpenChange?: (open: boolean) => void;
}
