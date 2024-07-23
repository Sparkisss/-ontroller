// типы для получаемых с сервера данных об объектах
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
// типы пропсов для MainPage
export interface DataProps {
    data: string;
    send?: any;
    children?: React.ReactNode;
}