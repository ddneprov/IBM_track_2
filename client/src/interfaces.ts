export interface FormInput {
  type: string,
  label: string,
  value: string,
  placeholder: string,
  isValid: boolean,
  minLength?: number,
  maxLength?: number,
}