import NavBarMain from "@/components/extras/navbar";

function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="h-full flex flex-col gap-y-10 items-center justify-center
    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-400 to-gray-800
    "
    >
      {/* <nav>This is a auth navbar</nav> */}
      <NavBarMain />
      {children}
    </div>
  );
}
export default PublicLayout;
