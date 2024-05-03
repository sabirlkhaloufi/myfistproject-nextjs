import { signIn, signOut } from "./auth";

export const handleGithubLogin = async () => {
  "use server";
  try {
    await signIn("github");
  } catch (error) {
    console.log("Error during sign-in:", error);
  }
};

export const handleGoogleLogin = async () => {
  "use server";
  signIn("google");
};

export const handleLogout = async () => {
  "use server";
  await signOut();
};
