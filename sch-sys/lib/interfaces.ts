export interface PriceTableData {
  includes: {
    planName: string;
    price?: number | string;
    element?: string[];
    custom?: Boolean;
  };
}
