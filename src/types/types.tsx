export type Product = {
  id: number;
  productName: string;
  description: string;
  price: number;
  originalPrice?: number | null;
  discount?: string | null;
  imageUrl: string;
};

export type ProductListProps = {
  isGridView: boolean;
  showCount: number;
  handleSort: (products: Product[]) => Product[];
};

export type ProductImageProps = {
  imageUrl: string;
  productName: string;
  width?: number;
  height?: number;
};

export type ProductDiscountProps = {
  discount: string;
};

export type ProductDetailsProps = {
  productName: string;
  description: string;
  price: number;
  originalPrice?: number | null;
};
