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

export interface User {
    data: IUser[] | null,
    loading: boolean,
    error: string | null
}

export interface DataProps {
    data: string | number;
    send?: any;
    children?: React.ReactNode;
}