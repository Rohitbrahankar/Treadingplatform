import React from "react";
import { HomeIcon, BarChartIcon, SettingsIcon, UserIcon } from "lucide-react";
import { SheetClose } from "@/components/ui/sheet";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "@/State/Auth/Action"; // Adjust the import path as necessary

const menu = [
  { name: "Home", path: "/", icon: HomeIcon },
  { name: "Portfolio", path: "/portfolio", icon: BarChartIcon },
  { name: "WatchList", path: "/watchlist", icon: SettingsIcon },
  { name: "Activity", path: "/activity", icon: UserIcon },
  { name: "Wallet", path: "/wallet", icon: UserIcon },
  { name: "Payment Details", path: "/paymentdetails", icon: UserIcon },
  { name: "Withdrawal", path: "/withdrawal", icon: UserIcon },
  { name: "Profile", path: "/profile", icon: UserIcon },
  { name: "LogOut", path: "/", icon: UserIcon },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="mt-10 space-y-2 px-2">
      {menu.map((item, index) => {
        const Icon = item.icon;
        return (
          <SheetClose asChild key={index}>
            {/* <div
              role="button"
              tabIndex={0}
              onClick={() =>{ navigate(item.path)
                if (item.name === 'LogOut') {
                  handleLogout();
                }
              }}
              className="flex items-center gap-4 py-2 px-4 w-full text-left text-black hover:bg-white/20 rounded transition cursor-pointer"
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
            </div> */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => {
                if (item.name === "LogOut") {
                  handleLogout(); // call logout first
                } else {
                  navigate(item.path); // navigate only for non-logout items
                }
              }}
              className="flex items-center gap-4 py-2 px-4 w-full text-left text-black hover:bg-white/20 rounded transition cursor-pointer"
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
            </div>
          </SheetClose>
        );
      })}
    </div>
  );
};

export default Sidebar;
