
import { Suspense } from "react";
import Loader from "../Loader/Loader";
import Navigation from "../Navigation/Navigation";

const SharedLayout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </div>
  );
};

export default SharedLayout;
