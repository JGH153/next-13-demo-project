"use server";

export const myServerAction = async (formData: FormData) => {
  console.log("myServerAction", formData);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // throw new Error("myServerAction error");
};

export const mySimpleServerAction = async (value: string) => {
  console.log("mySimpleServerAction", value);

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return "hello";
};
