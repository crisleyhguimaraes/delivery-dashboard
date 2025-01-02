import { api } from "@/lib/axios";

export async function signOut() {
  await api.post("/sign-out");
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "/";
}
