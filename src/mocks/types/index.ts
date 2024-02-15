import { RestRequest } from "msw";

export type MethodT = "get" | "post" | "put" | "delete";

export type MenuDataT = {
  id: string;
  name: string;
  type: string;
  price: {
    defaultPrice: number;
    salePrice?: number;
  };
  imageSrc?: string;
  quantity: number;
  refId?: string[];
  required?: number;
};

export type VendorDataT = {
  id: string;
  name: string;
  address: string;
  phoneNumber: string;
};

export type DataT =
  | Record<string, MenuDataT>
  | Record<string, VendorDataT>
  | undefined;

export type DataT2 = MenuDataT[] | VendorDataT[] | undefined;

export type CallBackType = (
  req: RestRequest,
  data: DataT2,
) => MenuDataT | VendorDataT | undefined;
