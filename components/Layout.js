import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

export default function Layout({ children }) {
  return (
    <div className="flex justify-center bg-gray-200">
      <div className="flex flex-col min-h-screen w-full">
        <SiteHeader />
        <div className="flex-grow">{children}</div>
        <SiteFooter />
      </div>
    </div>
  );
}
