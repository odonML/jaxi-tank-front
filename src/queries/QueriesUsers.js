import { gql } from "apollo-boost";

export const GET_USERS = gql`
  {
    users {
      _id
      name
      cargo
      celphone
      img
    }
  }
`;
export const DELETE_USER = gql`
mutation DeleteUser($id: String) {
  deleteUser(_id: $id)
}
`;

export const ADD_USER = gql`
  mutation CreateUser($input: UserInput){
    createUser(input: $input)
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($id: String, $input: UserInput){
    updateUser(_id: $id, input: $input)
  }
`;