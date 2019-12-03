

export interface CriterionTable {
    id: number,
    description: string,
    section: string,
}

export interface CriterionForm {
    description: string,
    section: string,
}

export interface CriterionTableValue {
    description: string;
    isMandatory:boolean;
}