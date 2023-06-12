import Nav from "./Nav";

// Layout Component to tie all the pages together with nav bar and footer
const Layout = ({ children }: any) => {
  return (
    <>
      <Nav />
      <main>
        {children}
      </main>
    </>

  );
};

export default Layout;