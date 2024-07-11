import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function useCheckUser() {
  const router = useRouter();
  const [user, setUser] = useState(false);

  useEffect(() => {
    function checkUser() {
      let cookie = Cookies.get("userToken") || null;

      if (cookie) {
        setUser(true);
        cookie = null;
        router.push("/home");
      }
    }

    checkUser();
    return () => {
      setUser(false);
    };
  }, [user, router]);

  return user;
}
