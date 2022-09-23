import React, {useEffect, useState} from 'react';

import ClayTable from '@clayui/table';

import Post from './Post';

import {GET} from '../request';


function Get() {
  
	const [posts, setPosts] = useState([]);

	useEffect(() => {
	  GET().then((res) => setPosts(res.items));
	}, [posts]);
  

  
    return (

<>

<ClayTable>
<ClayTable.Head>
  <ClayTable.Row>
  <ClayTable.Cell headingCell>{"id"}</ClayTable.Cell>
	<ClayTable.Cell headingCell>{"articleBody"}</ClayTable.Cell>
	<ClayTable.Cell headingCell>{"headline"}</ClayTable.Cell>
  </ClayTable.Row>
</ClayTable.Head>
<ClayTable.Body>



{posts ? posts.map(post => (
 
 <ClayTable.Row key={post.id}>
	<ClayTable.Cell >{post.id}</ClayTable.Cell>
	<ClayTable.Cell>{post.headline}</ClayTable.Cell>
	<ClayTable.Cell >{post.articleBody}</ClayTable.Cell>
  </ClayTable.Row>

)

):''}

</ClayTable.Body>
</ClayTable>
	
	<Post	/>	

</>

  )
	}

export default Get;
