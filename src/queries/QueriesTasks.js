import { gql } from "apollo-boost";

export const GET_TASKS = gql`
  {
    tasks {
      _id
      title
      description
    }
  }
`;
export const DELETE_TASK = gql`
mutation DeleteTask($id: String) {
  deleteTask(_id: $id)
}
`;
export const ADD_TASK = gql`
  mutation CreateTask($input: TaskInput){
    createTask(input: $input)
  }
`;

export const UPDATE_TASK = gql`
  mutation UpdateTask($id: String, $input: TaskInput){
    updateTask(_id: $id, input: $input)
  }
`;