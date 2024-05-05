import LoginForm from "@/components/loginForm/loginForm";
import styles from "./login.module.css";
import { auth, signIn } from "@/lib/auth";
import { handleGithubLogin, handleGoogleLogin } from "@/lib/action";

const LoginPage = async () => {
  const session = await auth();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button type="submit" className={styles.github}>
            Login with Github
          </button>
        </form>

        <form action={handleGoogleLogin}>
          <button type="submit" className={styles.github}>
            Login with Google
          </button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
