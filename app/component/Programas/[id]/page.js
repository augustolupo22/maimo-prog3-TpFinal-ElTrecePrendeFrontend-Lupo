const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

const res = await fetch(`${API_URL}/programs/${params.id}`, {
  cache: "no-store",
});
