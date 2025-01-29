import { Helmet } from "react-helmet";
import UnauthenticatedLayout from "../../layouts/UnAuthenticatedLayout";
import Hero from "../../components/Hero";

const Home = () => {
  return (
    <UnauthenticatedLayout>
      <Helmet>
        <title>Ecommerce | Home</title>
      </Helmet>
      <Hero />
    </UnauthenticatedLayout>
  );
};

export default Home;
