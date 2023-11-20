import { useLoaderData, useParams } from "react-router-dom";

export const CareerDetails = () => {
  const { id } = useParams();
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Ullamco minim minim anim cupidatat reprehenderit qui nulla proident
          mollit nostrud tempor. Consequat anim consectetur nostrud do proident
          consectetur Lorem. Nisi consectetur exercitation proident pariatur
          laboris. Quis adipisicing Lorem aute exercitation et exercitation ut
          ullamco pariatur qui.
        </p>
      </div>
    </div>
  );
};

//? loader function
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;

  //? fetch a single document
  const res = await fetch(`http://localhost:5000/careers/${id}`);

  if (!res.ok) {
    throw Error("Could not find that career");
  }

  return res.json();
};
