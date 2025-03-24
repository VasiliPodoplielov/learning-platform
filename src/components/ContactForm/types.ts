export interface IFormInput {
  name: string;
  phone: string;
  email: string;
  accept: boolean;
}

export interface Toast {
  show: (message: { severity: string; summary: string; detail: string; life: number }) => void;
}
