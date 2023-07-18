import loadBlogData from "@/utils/loadBlogData";
import loadSingleBlogData from "@/utils/loadSingleBlogData";

export const generateMetadata = async ({ params }) => {
  const { id, title, body } = await loadSingleBlogData(params.id);
  return {
    title: title,
  };
};

export const generateStaticParams = async () => {
  const blogs = await loadBlogData();
  return blogs.map(({ id }) => ({
    id: id.toString(),
  }));
};

const SingleBlog = async ({ params }) => {
  const { id, title, body } = await loadSingleBlogData(params.id);

  // console.log({ id, title, body })

  // const [year, id] = params.segmants || [];

  // const params2 = useParams();
  // const searchParams2 = useSearchParams();

  // console.log(params2.segmants,  searchParams2.get('title'))

  return (
    <div>
      Single Blog {params.id}
      <div className="border border-blue-500 p-2 my-2 mx-2">
        <h2 className="text-2xl">
          {id}. {title}
        </h2>
        <p>{body}</p>
      </div>
      {/* Single Blogs {year || new Date().getFullYear()} for {id}
      <br />
      {searchParams.title} */}
    </div>
  );
};

export default SingleBlog;
