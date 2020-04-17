export interface CheckboxGroupProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  name?: string;
  onChange?: (e: any) => void;
}
declare const _default: import('react').ForwardRefExoticComponent<CheckboxGroupProps & {
  children?: import('react').ReactNode;
} & import('react').RefAttributes<any>>;
export default _default;