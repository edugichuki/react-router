import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <h2>Page not found!!</h2>
      <p>
        Irure elit aliquip adipisicing pariatur dolor aliquip minim nisi ad
        Lorem ipsum Lorem et. Ad ad amet esse officia nulla laborum amet. Esse
        laboris dolore ex sint consequat est ea. Quis ullamco quis nulla non et.
        Ipsum quis tempor ea aliqua. Ad mollit ex labore dolor qui exercitation.
        Ex veniam cillum quis aliqua adipisicing reprehenderit eiusmod
        consequat.
      </p>
      <p>
        Go to the <Link to="/">Homepage</Link>.
      </p>
    </div>
  );
};
