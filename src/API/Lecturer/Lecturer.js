import axios from "axios";

export const getLecturerCourses = async () => {
   try {
    const option = {
      url: "https://graduation-project-lilac-five.vercel.app/doctor/coursesByDoctor",
      method: "GET",
       headers: {
        Authorization: sessionStorage.getItem("Token")
      }
    };

    const { data } = await axios.request(option);
    if (data.message === "success") {
      console.log(data);
      
      return data.courses
    }
  } catch (data) {
    console.error("Error during login:", data.message);
  }
}

export const addTopic = async (values, toast) => {
  toast.loading("Adding topic...");
  try {
    const option = {
      url: "https://graduation-project-lilac-five.vercel.app/doctor",
      method: "POST",
      data: values, // القيم المرسلة
      headers: {
        Authorization: sessionStorage.getItem("Token"),
        "Content-Type": "multipart/form-data",
      },
    };

    const { data } = await axios.request(option);

    console.log("Response from API:", data);
    console.log("Submitted values:", values);

    toast.dismiss();

    if (data.message === "success") {
      toast.success("Topic added successfully");
    }
  } catch (error) {
    toast.dismiss();
    toast.error(error.response?.data?.message || "Error occurred");
    console.error("Error details:", error.response?.data);
  }
};
 
export  async function getCourseDetails (_id){
  try {
    const option = {
      url: `https://graduation-project-lilac-five.vercel.app/doctor/getContent/${_id}`,
      method: "GET",
      headers: {
        Authorization: sessionStorage.getItem("Token")
      }
    };
    const { data } = await axios.request(option);
    if (data.message === "success") {
      return data
    }
  } catch (error) {
    console.error(error?.response?.data);
  }
}
 
export async function deleteTopic(_id, queryClient, toast) {
  const loadingToastId = toast.loading("Deleting topic...");
  try {
    const option = {
      url: `https://graduation-project-lilac-five.vercel.app/doctor/${_id}`,
      method: "DELETE",
      headers: {
        Authorization: sessionStorage.getItem("Token")
      },
    };

    const { data } = await axios.request(option);
    toast.dismiss(loadingToastId);

    if (data.message === "success") {
      toast.success("Topic deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["courseDetails"] });
      queryClient.invalidateQueries({ queryKey: ["lecturerCourses"] });
    }
  } catch (error) {
    toast.dismiss(loadingToastId);
 
    console.error(error);
  }
}
