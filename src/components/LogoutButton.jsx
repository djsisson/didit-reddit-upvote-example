import { signOut } from "@/auth";
import { revalidatePath } from "next/cache";

export function LogoutButton() {
  async function handleLogout() {
    "use server";
    revalidatePath("/");
    await signOut({ redirectTo: "/" });
  }

  return (
    <form action={handleLogout} className="inline">
      <button className="bg-pink-300 text-black px-3 py-2 rounded">
        Logout
      </button>
    </form>
  );
}
