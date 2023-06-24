export interface Category{
  id: number;
  category: string;
  subcategory: string;
}

export interface SuggestProduct{
  banerimage:string;
  category: Category;
}