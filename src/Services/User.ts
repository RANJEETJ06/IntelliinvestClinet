import axios from 'axios';
import { User } from '../utils/InterFace';
const User_API_BASE_URL = "http://localhost:8080/api/users/";

class UserService {
    saveUser(user:User) {
        return axios.post(User_API_BASE_URL + "create/", user);
    }
    getUser() {
        return axios.get(User_API_BASE_URL + "")
    }
    deleteUser(email:any) {
        return axios.delete(User_API_BASE_URL + "delete/",email)
    }
    getUserById(id:any) {
        return axios.get(User_API_BASE_URL + "getUser/"+id+"/")
    }
    updateUser(User:User) {
        return axios.put(User_API_BASE_URL + "update/",User)
    }
    loginUser(payload:any){
        const username=payload.username
        const password=payload.password
        return axios.post(User_API_BASE_URL + "login/",{username,password})
    }
}

const UserServiceInstance = new UserService();
export default UserServiceInstance;
