
import React from 'react';
import {List,Datagrid,TextField,DataField,EditButton,DeleteButton} from 'react-admin'


const PostList = (props) => {
    return ( 
        <List {...props}>
              <Datagrid>
                  <TextField source="id"/>
                  <TextField source="title"/>
                  <TextField source="publishAt"/>
                  <EditButton basePath='/post'/>
                  <DeleteButton basePath='/post'/>
              </Datagrid>
        </List>
     );
}
 
export default PostList;