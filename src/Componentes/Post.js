import React, { useState } from "react";
import ClayForm, { ClayInput } from "@clayui/form";
import ClayButton from "@clayui/button";
import  {POST} from '../request'

const Post = () => {
  const [articleBody, setArticleBody] = useState("");
  const [headline, setHeadline] = useState("");

  function cadastrar() {
    POST(articleBody,headline).then(()=>setArticleBody(""),setHeadline(""))
  }

  return (
    <div>
      <ClayForm>
        <ClayForm.Group className="form-group-sm">
          <label htmlFor="basicInput">articleBody</label>
          <ClayInput
            id="articleBody"
            onChange={(event) => setArticleBody(event.target.value)}
            placeholder="Digite o nome do arquivo"
            type="text"
            value={articleBody}
          />
        </ClayForm.Group>
        <ClayForm.Group className="form-group-sm">
          <label htmlFor="basicInput">headline</label>
          <ClayInput
            id="headline"
            onChange={(event) => setHeadline(event.target.value)}
            placeholder="Bloggs"
            type="text"
            value={headline}
          />
        </ClayForm.Group>
        <ClayButton onClick={() => cadastrar()} displayType="primary">
          Cadastrar
        </ClayButton>
      </ClayForm>
    </div>
  );
};

export default Post;
