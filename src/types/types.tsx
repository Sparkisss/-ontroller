export interface IAddress {
    city: string;
    street: string;
    suite: string;
}

export interface ICompany {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface IUser {
    id: number;
    address: IAddress;
    company: ICompany;
}