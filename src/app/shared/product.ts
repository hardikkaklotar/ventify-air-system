export interface Product {
  id: number;
  title: string;
  description: string;
  imageKeyFeatures: string;
  image: string;
  keyFeatures: string[];
  displayedColumns: string[];
  tableData: any[];
}

export interface Images{
  title: string;
  image: string[];
}