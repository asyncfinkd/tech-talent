export type Props = {
  email: string;
  password: string;
};

export interface LoginInputsResultFieldsRequired {
  message: string;
}

export interface LoginInputsResult {
  name: string;
  type: string;
  title: string;
  required: LoginInputsResultFieldsRequired;
}
