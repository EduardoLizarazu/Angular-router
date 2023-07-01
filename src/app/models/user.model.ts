export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  role: 'costumer' | 'admin';
}

export interface CreateUserDTO extends Omit<User, 'id'> {}
