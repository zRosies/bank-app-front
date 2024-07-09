export interface User {
  userInfo: UserInfo;
  balance: {
    user_id: string;
    balance: number;
  };
  transaction: {
    value: number;
    payer_id: string;
    receiver_id: string;
    transaction_type: string;
    date: string;
    status: string;
  }[];
}

export type UserInfo = {
  user_id: string;
  name: string;
  cpf: number;
  email: string;
  password: string;
  store_owner: boolean;
};
