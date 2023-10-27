export const ServerAction = () => {
  async function create(formData: FormData) {
    "use server";
    console.log("formData", formData.get("name"));
    formData.get("name") as string;
  }

  return (
    <form action={create}>
      <input type="text" name="name" className="text-black" />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};
