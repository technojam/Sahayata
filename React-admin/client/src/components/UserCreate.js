import React from 'react';
import {Create,SimpleForm,TextInput,} from 'react-admin'

const UserCreate = (props) => {
    return ( 
        <Create title="Create a user " {...props}>
            <SimpleForm>
                <TextInput source="name"></TextInput>
                <TextInput  source="email"></TextInput>
               
            </SimpleForm>
        </Create>

     );
}
 
export default UserCreate;