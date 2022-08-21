import { UserService } from 'domain/user/UserService';
import { userRepository } from 'infrastructure/user/user.repository';
import { HttpAxios } from 'infrastructure/util/httpAxios';

const repository = userRepository(HttpAxios);
const userServices = UserService(repository);
export default userServices;
