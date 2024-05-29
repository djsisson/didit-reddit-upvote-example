import { signOut } from "@/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export function LogoutButton() {
  async function handleLogout() {
    "use server";
    await signOut();
    revalidatePath("/");
    redirect("/");
  }

  return (
    <form action={handleLogout} className="inline">
      <button className="bg-pink-300 text-black px-3 py-2 rounded">
        Logout
      </button>
    </form>
  );
}
