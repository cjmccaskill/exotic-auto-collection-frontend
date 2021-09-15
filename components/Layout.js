import CategoryButtons from "./CategoryButtons";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

const Layout = ({ children, categories }) => {
  return (
    <div className="flex justify-center bg-gray-200">
      <div className="max-w-screen-lg flex flex-col min-h-screen w-full">
        <SiteHeader />
        <CategoryButtons categories={categories} />
        <div className="flex-grow">{children}</div>
        <SiteFooter />
      </div>
      <div
        hidden
        id="snipcart"
        data-api-key="ODhhNWUxOGEtNTk0OC00OTQwLWJkOWMtM2M1ZmNjODU1ZDJhNjM3MzMyNzM0NjM1OTMyNjcz"
      />
    </div>
  );
};

export default Layout;
