import { PositionModel } from './position.model';
import { StatusModel} from './status.model';

export interface EmployeeModel {
  id:       number;
  avatar:   string;
  name:     string;
  position: PositionModel;
  status:   StatusModel;
}
