import axios from "axios";

export async function getAllDoctors() {
  try {
    const options = {
      url: "https://graduation-project-lilac-five.vercel.app/admin/getAllDoctors",
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
    console.error("Error fetching lecturers:", error);
    return [];
  }
}

export async function addDoctor(values,toast,queryClient) {
  const loadingToastId = toast.loading("Adding lecturer...");
  
  try {
    const options = {
      url: "https://graduation-project-lilac-five.vercel.app/admin/addDoctors",
      method: "POST",
      headers: {
        Authorization: sessionStorage.getItem("Token"),
        "Content-Type": "application/json",
      },
      data: values,
    };

    const { data } = await axios.request(options);
    toast.dismiss(loadingToastId);
    console.log(data);
    if (data.message === "success") {
      toast.success("Lecturer added successfully!");
      queryClient.invalidateQueries(['doctors']);
    }
  } catch (error) {
    console.error("Error adding lecturer:", error);
    toast.error("Error adding lecturer!");
    throw error;
  }
}

 


// export async function updateLecturer(id, values) {
//   try {
//     const options = {
//       url: `https://graduation-project-lilac-five.vercel.app/admin/updateLecturer/${id}`,
//       method: "PUT", 
//       headers: {
//         Authorization: sessionStorage.getItem("Token")
//       },
//       data: values
//     };

//     const { data } = await axios.request(options);
//     return data;
//   } catch (error) {
//     console.error("Error updating lecturer:", error);
//     throw error;
//   }
// }

export async function deleteDoctor(id) {
  try {
    const options = {
      url: `https://graduation-project-lilac-five.vercel.app/admin/deleteDoctor/${id}`,
      method: "DELETE",
      headers: {
        Authorization: sessionStorage.getItem("Token")
      }
    };

    const { data } = await axios.request(options);
    console.log(data);
 
   } catch (error) {
    console.error("Error deleting lecturer:", error);
    throw error;
  }
}
