/* tslint:disable */
import { Company } from './company';
import { Student } from './student';
export interface Evaluation {
  id?: number;
  pointOn5?: number;
  description?: string;
  companyId?: number;
  studentId?: number;
  company?: Company;
  student?: Student;
}
