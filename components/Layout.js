import CategoryButtons from "./CategoryButtons";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

export default function Layout({ children, categories }) {
  return (
    <div className="flex justify-center bg-gray-200">
      <div className="max-w-screen-xl flex flex-col min-h-screen w-full">
        <SiteHeader />
        <CategoryButtons categories={categories} />
        <div className="flex-grow">{children}</div>
        <SiteFooter />
      </div>
      <div
        hidden
        id="snipcart"
        data-api-key="N2RkYTZiMzgtMmNiYS00YThjLWFhYjAtZWVjODI3YTYyYWY0NjM3NjczMzkyNjAxMTUyOTgw"
      />
    </div>
  );
};


