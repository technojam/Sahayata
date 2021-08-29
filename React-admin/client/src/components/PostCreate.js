import React from 'react';
import {Create,SimpleForm,TextInput,DateInput} from 'react-admin'

const PostCreate = (props) => {
    return ( 
        <Create title="Create a post " {...props}>
            <SimpleForm>
                <TextInput source="title"></TextInput>
                <TextInput multiline source="body"></TextInput>
                <DateInput lable="published" source="publishAt"></DateInput>
            </SimpleForm>
        </Create>

     );
}
 
export default PostCreate;