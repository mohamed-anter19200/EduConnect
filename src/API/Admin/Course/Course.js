import axios from "axios";

export async function getAllCourses() {
  try {
    const options = {
      url: "https://graduation-project-lilac-five.vercel.app/admin/getAllCourses",
      method: "GET",
      headers: {
        Authorization: sessionStorage.getItem("Token")
      }
    };

    const { data } = await axios.request(options);
    console.log(data);
    if (data.message === "success") {
      return data;
    }
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
}

export async function addCourse(values,queryClient,toast) {
   const toastId = toast.loading("Adding course...");
  try {
    const options = {
      url: "https://graduation-project-lilac-five.vercel.app/admin/addCourse",
      method: "POST",
      headers: {
        Authorization: sessionStorage.getItem("Token"),
        "Content-Type": "application/json",
      },
      data: values,
    };

    const { data } = await axios.request(options);
    console.log(data);
    console.log(values);
    
    toast.dismiss(toastId);
    if (data.message === "success") {
      queryClient.invalidateQueries({ queryKey: ["courses"] });
      toast.success("Course added successfully!");
      return data;
    }
   // throw new Error(data.message || "Error adding course");
  } catch (error) {
    toast.error("Error adding course!");
    console.error("Error adding course:", error);
   }
}

export async function deleteCourse(id) {
  try {
    const options = {
      url: `https://graduation-project-lilac-five.vercel.app/admin/deleteCourse/${id}`,
      method: "DELETE",
      headers: {
        Authorization: sessionStorage.getItem("Token")
      }
    };

    const { data } = await axios.request(options);
    console.log(data);
    if (data.message === "success") {
      return data;
    }
    throw new Error(data.message || "Error deleting course");
  } catch (error) {
    console.error("Error deleting course:", error);
    throw error;
  }
}
