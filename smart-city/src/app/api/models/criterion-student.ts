/* tslint:disable */
import { Criterion } from './criterion';
import { Student } from './student';
export interface CriterionStudent {
  criterionId?: number;
  studentId?: number;
  isMandatory?: number;
  criterion?: Criterion;
  student?: Student;
}
