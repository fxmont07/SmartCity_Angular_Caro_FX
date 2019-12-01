// Interface used in view company crud
export interface CompanyTable {
    id : number;
    name : string;
    email : string;
    locality : string;
}

export interface CompanyForm {
     email : string;
     password : string;
     name : string;
     address : {
        locality : string;
        postCode : string;
        street : string;
        streetNumber : string;
     };
     phone : string;
     description : string;
}



