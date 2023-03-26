import { Category } from "./category";

export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  categoryId: number;
  category: { [key: string]: Category };
  subcategoryId: number;
  subcategory?: { [key: string]: Category };
  phoneNumber: string;
  dateOfBirth: string;
}
