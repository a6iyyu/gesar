export interface registerusers {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
}

export interface loginusers {
  username_or_email: string;
  password: string;
}