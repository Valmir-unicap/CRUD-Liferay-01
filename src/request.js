const blogId = themeDisplay.getSiteGroupId();
export function POST(articleBody,headline){
    return Liferay.Util.fetch(`http://localhost:8080/o/headless-delivery/v1.0/sites/${blogId}/blog-postings`, {

    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa('test@liferay.com:learn')
    },
    // body: '{ "headline": "Test Blog Entry from REST Services", "articleBody": "This article was posted via REST services provided by Liferay DXP." }',
    body: JSON.stringify({
        headline ,
        articleBody 
            
    })
}).then((res)=> res.json())
}

export function GET(){
    return Liferay.Util.fetch(`http://localhost:8080/o/headless-delivery/v1.0/sites/${blogId}/blog-postings`, {

        method: 'GET'
    }).then((res)=> res.json())
}


export function DELETE(id_site){
    return Liferay.Util.fetch(`http://localhost:8080/o/headless-delivery/v1.0/blog-postings/`+id_site, {

        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((res)=> res.json())
}

export function UPDATE(blogId,headline,articleBody){
    return Liferay.Util.fetch(`http://localhost:8080/o/headless-delivery/v1.0/blog-postings/${blogId}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        // body: '{ "headline": "Test Blog Entry from REST Services", "articleBody": "This article was posted via REST services provided by Liferay DXP." }',
        body: JSON.stringify({
            headline ,
            articleBody 
                
        })
    }).then((res)=> res.json())
    }

    /*export function BLOG_PUT(postId, newHeadline, newArticleBody) {
        return Liferay.Util.fetch(
          `/o/headless-delivery/v1.0/blog-postings/${postId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              headline: newHeadline,
              articleBody: newArticleBody,
            }),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      }*/