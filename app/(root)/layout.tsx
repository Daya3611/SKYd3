import React from "react";
import Sidebar from "@/components/Sidebar";
import MobileNavigation from "@/components/MobileNavigation";
import Header from "@/components/Header";
import { getCurrentUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import { Toaster } from "@/components/ui/toaster";
import Link from "next/link";

export const dynamic = "force-dynamic";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) return redirect("/sign-in");

  return (
    <main className="flex h-screen">
      <Sidebar {...currentUser} />

      <section className="flex h-full flex-1 flex-col">
        <MobileNavigation {...currentUser} />
        <Header userId={currentUser.$id} accountId={currentUser.accountId} />
        <div className="main-content">{children}</div>
        <div className="text-right text-sm italic text-gray-400 mb-3 pr-4 hidden md:block">
          <p>
            Made By{" "}
            <strong className="text-brand-400 hover:underline">
              <Link href={"/"}>Dayanand Gawade</Link>
            </strong>
          </p>
        </div>
      </section>

      <Toaster />
    </main>
  );
};
export default Layout;
