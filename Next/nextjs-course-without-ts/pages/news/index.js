 // our-domain.com/
 import { useRouter } from "next/router";
import Link from "next/link";

 function Hompage(){
  const router = useRouter();

  const newsId = router.query.newsId;
  console.log("router", newsId);

  return (
    <>
      <h1>THe news page</h1>
      <ul>
        <li>
          <Link href={`/news/detailnews`}>hellod</Link>
        </li>
      </ul>
    </>
  );
 }

 export default Hompage;