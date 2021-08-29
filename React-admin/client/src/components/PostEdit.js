import React from 'react';
import {Edit,SimpleForm,TextInput,DateInput} from 'react-admin'

const PostEdit = (props) => {
    return ( 
        <Edit title="edit a post " {...props}>
            <SimpleForm>
                <TextInput disabled source="id"></TextInput>
                <TextInput source="title"></TextInput>
                <TextInput multiline source="body"></TextInput>
                <DateInput lable="published" source="publishAt"></DateInput>
            </SimpleForm>
        </Edit>

     );
}
 
export default PostEdit;