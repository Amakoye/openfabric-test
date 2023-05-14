type Product = {
  title: string;
  description: string;
  price: string | number;
  brand: string;
  category: string;
  id: string;
};

type User = {
  username: string;
  password?: string;
  access_token?: string;
  message?: string;
};

export { Product, User };
