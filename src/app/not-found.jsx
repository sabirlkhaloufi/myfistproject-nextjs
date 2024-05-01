import { Link } from "next/link";

function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <p>
        The page you are looking for does not exist. It may have been moved or
        deleted.
      </p>
      <Link href="/">Go to home</Link>
    </div>
  );
} 

export default NotFound;
