import { gql, request } from "graphql-request";

const MASTER_URL =
  "https://ap-south-1.cdn.hygraph.com/content/" +
  process.env.NEXT_PUBLIC_HYGRAPH_API_KEY +
  "/master";

const getAllCourseList = async () => {
  const query = gql`
    query MyQuery {
      trips {
        name
        time
        description
        banner {
          url
        }
        video
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

export default getAllCourseList;
