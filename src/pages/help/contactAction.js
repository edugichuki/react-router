export const contactAction = async ({ request }) => {
  console.log(request);
  const data = await request.formData();

  const submission = {
    email: data.get("email"),
    message: data.get("message"),
  };
  console.log(submission);
};
