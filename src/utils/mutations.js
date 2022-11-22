import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        first_name
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($first_name: String!, $last_name: String!, $email: String!, $password: String!) {
    addUser(first_name: $first_name, last_name: $last_name, email: $email, password: $password) {
      token
      user {
        _id
        first_name
        last_name
        email
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($email: String!, $first_name: String, $last_name: String, $phone_number: String, $street_address_1: String, $street_address_2: String, $city: String, $state: String, $zip: String, $country: String){
    updateUser(email: $email, first_name: $first_name, last_name: $last_name, phone_number: $phone_number, street_address_1: $street_address_1, street_address_2: $street_address_2, city: $city, state: $state, zip: $zip, country: $country) {
      token
      user {
        email
        first_name
        last_name
        phone_number
        street_address_1
        street_address_2
        city
        state
        zip
        country
      }
    }
  }
`



