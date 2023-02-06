import TopbarSearchInput from "./Topbar__SearchInput";
import TopbarIconGroup from "./Topbar__IconGroup";

const Topbar = () => {
  return (
    <div className="flex justify-between py-2 items-center">
      <TopbarSearchInput />
      <TopbarIconGroup />
    </div>
  );
};

export default Topbar;
