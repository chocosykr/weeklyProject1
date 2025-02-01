import Image from "next/image";
import SearchForm from "../../components/searchForm";

export default async function Home({ searchParams } : {
  searchParams: Promise<{ query?: string }>

}) {

  const query = (await searchParams).query;


  return (
    <>
    <section className="pink_container">
      <h1 className="heading">Pitch Your Startup <br /> Connect with entrepreneurs</h1>

      <p className="sub-heading !max-w-5xl" >
        Submit ideas, Vote on Pitches, and get noticed in virtual Competitions
      </p>
      
      <SearchForm query={query} />
    </section>
    </>
  );
}
