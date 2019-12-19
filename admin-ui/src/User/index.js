import React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  BooleanInput,
  Edit,
  Filter,
  required,
  email,
} from 'react-admin';
const validateEmail = [required(), email()];
const validateRequired = required();
export const UserCreate = props => (
  <Create {...props}>
    <SimpleForm redirect="show">
      <TextInput source="username" validate={validateRequired} />
      <TextInput source="displayName" validate={validateRequired} />
      <TextInput source="email" validate={validateEmail} />
    </SimpleForm>
  </Create>
);
const UserEditTitle = ({ record }) => (<span>{`${record.username}`}</span>);
export const UserEdit = props => (
  <Edit {...props} title={<UserEditTitle />}>
    <SimpleForm redirect="list">
      <TextInput source="id" validate={validateRequired} />
      <TextInput source="username" validate={validateRequired} />
      <TextInput source="displayName" validate={validateRequired} />
      <TextInput source="email" validate={validateEmail} />
      <BooleanInput source="isPresent" />
    </SimpleForm>
  </Edit>
);
