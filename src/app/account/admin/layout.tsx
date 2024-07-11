"use client";
import AdminSheet from "@/components/account/admin/adminbar/admin-sheet";
import AdminSidebar from "@/components/account/admin/adminbar/admin-sidebar";
import { Loader2 } from "lucide-react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const router = useRouter();
  const [user, setUser] = useState(false);

  useEffect(() => {
    function checkUser() {
      let cookie = Cookies.get("userToken") || null;

      if (cookie) {
        setUser(true);
        cookie = null;
      } else {
        router.push("/home");
      }
    }

    checkUser();
    return () => {
      setUser(false);
    };
  }, [user, router]);

  if (!user) {
    return (
      <div className="flex h-svh items-center justify-center">
        <Loader2 className="animate-spin" />
      </div>
    );
  }

  return (
    <>
      <div className="flex h-screen pt-14">
        <AdminSidebar />
        {children}
      </div>
      <AdminSheet />
    </>
  );
}
