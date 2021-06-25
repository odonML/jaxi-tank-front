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