export interface Product {
  id: number;
  productName: string;
  description: string;
  price: number;
  type: string;
  originalPrice: number;
  discount: string;
  imageURL: string;
  information: string;
  additionalInformation: string;
  descriptionImages: {
    alt: string;
    imageURL: string;
  }[];
  additionalImages: {
    alt: string;
    imageURL: string;
  }[];
  SKU: string;
  sizes: string[];
  category: string;
  tags: string[];
}

export type ProductCardProps = {
  product: {
    id: number;
    productName: string;
    description: string;
    price: number;
    originalPrice?: number | null;
    discount?: string | null;
    imageURL: string;
  };
};

export interface ProductListProps {
  isGridView: boolean;
  products: Product[];
}

export type ProductImageProps = {
  imageUrl: string;
  productName: string;
  width?: number;
  height?: number;
  className?: string;
};

export type ProductDiscountProps = {
  discount: string;
};

export type ProductDetailsProps = {
  productName: string;
  description: string;
  price?: number;
  originalPrice?: number | null;
};

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface DescriptionProps {
  product: Product;
}

export interface ProductDescriptionProps {
  description: string;
  additionalInformation: string;
}
