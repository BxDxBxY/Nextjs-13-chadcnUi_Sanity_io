import Filters from "@/components/Filters";
import ResourceCard from "@/components/ResourceCard";
import SearchForm from "@/components/SearchForm";
import { getResources } from "@/sanity/actions";


const page = async () => {
  const resources = await getResources({
    query: "",
    category: "",
    page: "1",
  });

  console.log(resources);

  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className="nav-padding w-full">
        <div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center">
          <h1 className="sm:heading1 heading2 mb-6 text-center text-white">
            Jack's Company
          </h1>
        </div>
        <SearchForm />
      </section>
      <Filters />
      <section className="flex-center mt-6 w-full flex-col sm:mt-20">
        Header
        <div className="mt-12 flex justify-center flex-wrap gap-16 sm:justify-start w-full">
          {resources?.length > 0 ? (
            resources.map((resource: any) => (
              <ResourceCard 
              key={resource._id} 
              title={resource.title}
              id={resource._id}
              slug={resource._id}
              downloadNumber={resource.views}
              image={resource.image}
              // category={resource.category}
              />
            ))
          ) : (
            <p className="text-white-400 body-regular">No resources found</p>
          )}
        </div>
      </section>
    </main>
  );
};

export default page;
