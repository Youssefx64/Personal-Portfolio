import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Not found</title>
      </Helmet>
      <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:max-w-4xl">
        <h1 className="font-serif text-2xl font-medium text-ink dark:text-neutral-100">Page not found</h1>
        <p className="mt-3 text-neutral-600 dark:text-neutral-400">
          <Link to="/" className="text-accent underline-offset-2 hover:underline">
            Return home
          </Link>
        </p>
      </div>
    </>
  );
}
