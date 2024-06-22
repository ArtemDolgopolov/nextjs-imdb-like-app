import { getDiscoverMovies } from "@/utils/getMovies";
import { Movie } from "@/utils/types";
import CarouselsBanner from "./CarouselsBanner";

type Props = {
 id?: string;
 keywords?: string
}

async function CarouselBannerWrapper({ id, keywords }: Props) {
 const movies = await getDiscoverMovies(id, keywords)
 
  return (
    <CarouselsBanner movies={movies.results} />
  )
}

export default CarouselBannerWrapper