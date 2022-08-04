
const Discussions = ({discussions}) => {
   

    return(
        <>
        <section className="discussions-wrapper">
            <ul className="discussion-container">
                {discussions.map((el) => {
                   return <li
                      key = {el.node.id}
                      className = "discussion-content"
                   >
                      <div className="discussion-avator-wrapper">
                        <img
                            src = {el.node.author.avatarUrl}
                        />
                      </div>
                      <div className="discussion-content-wrapper">
                        <div className="discussion-content">
                            {`[${el.node.category.name}]`}
                        </div>
                        <h3 className="discussion-content-title">
                            <a href={el.node.url}>
                                    {el.node.title }
                            </a>
                        </h3>
                        <div className="discussion-content-info">
                             {`
                                ${el.node.author.login} / 
                                ${new Date(el.node.createdAt).toLocaleTimeString()}
                             `}   
                        </div>
                      </div>
                    
                   </li>
                })  
                }
            </ul>
        </section>
        </>
    )
}

export default Discussions