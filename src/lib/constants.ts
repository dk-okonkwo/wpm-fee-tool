
export type GenderOption = "male" | "female"| "other"
export type Institutions = "institute 1" | "institute 2"| "institute 3" | "institute 4"
export type Categories = "products" | "services"| "taka"
export type levels = "100" | "200" | "300" | "400" | "500" | "graduate"

export const UserFormDefaultValues ={
  first_name: "",
  last_name: "",
  phone:"",
  email:"",
  gender : '' as GenderOption,
  // institutions: "" as Institutions ,
  institutions: "" ,
  password: "",
  confirmPassword: "",
  levels: "" as levels,
  policy: false,
  state:'',
  isStudent: "" as "Yes" | "No",
} 
export const UserSignInFormDefaultValues ={
  email:"",
  password: "",
  rememberMeConsent: false,
  
} 
export const UserPostFormDefaultValues = {
  name: '',
  category: '' as Categories,
  negotiable: true as boolean,
  price: "",
  description: "",
  primaryImage: [] as File[],
  secondaryImage: [] as File[],
  discount: "",
} 

export const Genders = ['male','female','other']
export const levels = ['100','200','300','400','500','graduate']
export const Institutions = ['institute 1','institute 2','institute 3','institute 4']
export const Categories = ['products', 'services', 'taka']


export interface Product {
  name: string;
  description: string;
  category: string;
  price: Number;
  discount: string;
  negotiable: boolean;
  tags?: string[];
  images: File[];
}
