const { graphql } = require("@octokit/graphql");

async function getrepo(){
const { repository } = await graphql(
    `{
        repository(owner: "codestates-seb", name: "agora-states-fe") {
          discussions(first: 50) {
            edges {
              node {
                createdAt
                title
                id
                url
                author{
                  login
                  avatarUrl
                }
                category{
                  name
                }
                answer{
                  author{
                    avatarUrl
                  }
                          }
              }
            }
          }
        }
      }`,
    {
      headers: {
        authorization: `token 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`,
      },
    }
  );

  return repository;
}

export default getrepo