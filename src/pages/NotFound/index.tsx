import { useEffect } from "react";
import { useRecoilValue } from "recoil";

const NotFound = () => {
  useRecoilValue
  useEffect(() => {
    set(false);
  }, [])
  return <h1>404 - Page Not Found</h1>;
};

export default NotFound;
