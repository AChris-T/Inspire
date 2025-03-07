export interface Blog {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  coverImage: string;
  imageAlt: string;
  tags: string[];
}
