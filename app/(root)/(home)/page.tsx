import Filters from "@/components/Filters";
import Header from "@/components/Header";
import ResourceCard from "@/components/ResourceCard";
import SearchForm from "@/components/SearchForm";
import { getResources } from "@/sanity/actions";

interface Props {
  searchParams: { [key: string]: string | undefined };
}

const page = async ({ searchParams }: Props) => {
  console.log(searchParams);
  const resources = await getResources({
    query: "",
    category: searchParams?.category || "",
    page: "1",
  });

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
      {(searchParams?.query || searchParams.category) && (
        <section className="flex-center mt-6 w-full flex-col sm:mt-20">
          <Header
            query={searchParams?.query || ""}
            category={searchParams?.category || ""}
            title="Resources"
          />
          <div className="mt-12 flex justify-center flex-wrap gap-16 sm:justify-start w-full">
            {resources?.length > 0 ? (
              resources.map((resource: any) => (
                <ResourceCard
                  key={resource._id}
                  title={resource.title}
                  id={resource._id}
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
      )}
    </main>
  );
};

export default page;
