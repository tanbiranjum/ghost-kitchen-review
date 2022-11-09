import React from "react";

const Blog = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Blogs
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              Difference between SQL and NoSQL?
            </summary>
            <div className="px-4 pb-4">
              <p>
                A relational database uses SQL. NoSQL is a non-relational
                database, on the other hand. NoSQL databases are document-based,
                key-value pairs, while SQL databases are table-based, this
                indicates that although NoSQL databases are a collection of
                key-value pair, documents, graph databases, or wide-column
                stores that do not have standardized schema definitions, SQL
                databases represent data in the form of tables that consist of n
                number of rows of data.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              What is JWT, and how does it work?
            </summary>
            <div className="px-4 pb-4">
              <p>
                JWT, or JSON Web Token, is an open standard that allows a client
                and a server to exchange security-related data. Every JWT has a
                set of encoded JSON objects, including claims. To ensure that
                the claims cannot be changed after the token is issued, JWTs are
                signed using a cryptographic technique. A token is passed to the
                user and by this token user can communicate with the server. The
                server first verifies the token.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              What is the difference between javascript and NodeJS?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                Javascript is a scripting language which is meant to be used in
                browser. It cann't run outside the browser on it's own. On the
                other hand node js is a javascript run time engines. It is used
                to run javascript outside the browser. It first convert the
                javascript code into machine code and then run it.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              How does NodeJS handle multiple requests at the same time?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                NodeJS is a single-threaded application and it is event driven.
                It uses asynchronous I/O. When its receive multiple request at
                the same time, it will handle them one by one. It adds them to
                Event Queue and then execute them one by one.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Blog;
