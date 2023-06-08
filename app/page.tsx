import Promotions from "./Promotions";
import { getProjects } from "../sanity/sanity-utils";
import LandingPage from "./LandingPage";
import Products from "./Products";

export default async function Home() {
  const projects = await getProjects();
  return (
    <>
      <LandingPage />
      <Promotions />
      <Products />
    </>
  );
}
