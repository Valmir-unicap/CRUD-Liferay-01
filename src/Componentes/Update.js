import React,{useState} from 'react'
import {UPDATE} from '../request';
import ClayForm, { ClayInput } from "@clayui/form";
import ClayButton from "@clayui/button";

const Update = () => {
  //const [postId,setPostId] = useState("");
  const [articleBody, setArticleBody] = useState("");
  const [headline, setHeadline] = useState("");
  const [postId,setPostId] = useState("");


function clickHandler(){
  UPDATE(postId,headline,articleBody)
}
  return (
    <div>
<ClayForm>

<ClayForm.Group className="form-group-sm">
          <label htmlFor="postId">Id para Update</label>
          <ClayInput
            id="postId"
            onChange={(event) => setPostId(event.target.value)}
            placeholder="id"
            type="text"
            value={postId}
          />
        </ClayForm.Group>


        <ClayForm.Group className="form-group-sm">
          <label htmlFor="postId">Update headline</label>
          <ClayInput
            id="postId"
            onChange={(event) => setHeadline(event.target.value)}
            placeholder="Update headline"
            type="text"
            value={headline}
          />
        </ClayForm.Group>

<ClayForm.Group className="form-group-sm">
          <label htmlFor="postId">Update articleBody</label>
          <ClayInput
            id="postId"
            onChange={(event) => setArticleBody(event.target.value)}
            placeholder="Update articleBody"
            type="text"
            value={articleBody}
          />
        </ClayForm.Group>



        <ClayButton onClick={clickHandler} displayType="primary">
          Update
        </ClayButton>
        </ClayForm>
    </div>
    )
  }

export default Update

