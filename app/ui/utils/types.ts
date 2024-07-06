export interface User {
  userInfo: UserInfo;
  balance: {
    user_id: string;
    balance: number;
  };
  trasaction: {
    value: number;
    payer_id: string;
    receiver_id: string;
    transaction_type: string;
    date: string;
    status: string;
  }[];
}

export interface UserInfo {
  user_id: string;
  name: string;
  cpf: number;
  email: string;
  password: string;
  store_owner: boolean;
}
