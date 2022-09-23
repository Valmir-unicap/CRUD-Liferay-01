import React,{useState} from 'react'
import {DELETE} from '../request';
import ClayForm, { ClayInput } from "@clayui/form";
import ClayButton from "@clayui/button";

const Delete = () => {

  const [postId,setPostId] = useState("");

function clickHandler(){
    DELETE(postId)
}

  return (
    <div>

<ClayForm.Group className="form-group-sm">
          <label htmlFor="postId">Delete</label>
          <ClayInput
            id="postId"
            onChange={(event) => setPostId(event.target.value)}
            placeholder="Delete"
            type="text"
            value={postId}
          />
        </ClayForm.Group>
        <ClayButton onClick={clickHandler} displayType="primary">
          Delete
        </ClayButton>

    </div>
  )
}

export default Delete