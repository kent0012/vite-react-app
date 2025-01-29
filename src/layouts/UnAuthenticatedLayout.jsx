import Navigation from "../components/Navigation";

const UnAuthenticatedLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
    </>
  );
};

export default UnAuthenticatedLayout;
