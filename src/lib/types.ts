export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export type Product = {
  id: string;
  category: string;
  name: string;
  image: string;
  alt: string;
  description?: string;
};

export type ProductCollection = {
  title: string;
  subtitle: string;
  products: Product[];
};

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
};
