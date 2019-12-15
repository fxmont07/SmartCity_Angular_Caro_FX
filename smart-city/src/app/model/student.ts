export interface StudentTable {
    id: number;
    name: string;
    firstname: string;
    email: string;
}

export interface StudentForm {
    name: string;
    firstname: string;
    email: string;
    address : {
        locality : string;
        postCode : string;
        street : string;
        streetNumber : string;
    };
    section: string;
    phone: string;
}