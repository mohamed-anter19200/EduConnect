import axios from "axios"; 
export async function getAllSubjects() {
   try {
    const option = {
      url: "https://graduation-project-lilac-five.vercel.app/users/getAllSubjects",
      method: "GET",
       headers: {
        Authorization: sessionStorage.getItem("Token")
      }
    };

    const { data } = await axios.request(option);
    console.log("Subjects : ")
    if (data.message === "success") {
      console.log(data)
       return data.subjects
    }
  } catch (data) {
    console.error("Error during login:", data.message);
  }
}

export async function getAllLectures(id) {
  try {
    const options = {
      url: `https://graduation-project-lilac-five.vercel.app/users/getAllSubjects/${id}`,
      method: "GET",
      headers: {
        Authorization: sessionStorage.getItem("Token"),
      },
    };
    const { data } = await axios.request(options);

    console.log((data));
    
    const { message } = data;

    if (message === "success") {
      console.log(data);
      return data;
    }  
  } catch (error) {
    console.error("Failed to fetch lectures:", error);
    return [];
  }
}

export async function getLectureDetails(id) {
  try {
    const options = {
      url: `https://graduation-project-lilac-five.vercel.app/users/stream/${id} `,
      method: "GET",
      headers: {
        Authorization: sessionStorage.getItem("Token"),
      },
    };
    const { data } = await axios.request(options);

    if (data.message === "success") {
      console.log(data)
      return data;
    } 
  } catch (error) {
    console.error("Failed to fetch lectures:", error);
    return [];
  }
}

export async function getAllSections() {
  try {
   const option = {
     url: "https://graduation-project-lilac-five.vercel.app/users/getAllSections",
     method: "GET",
      headers: {
       Authorization: sessionStorage.getItem("Token")
     }
   };

   const { data } = await axios.request(option);
    if (data.message === "success")  {    
      return data.subjects
   }
 } catch (data) {
   console.error("Error during login:", data.message);
 }
}
  
export async function getSectionsOfSubject(id) {
  try {
    const token = sessionStorage.getItem("Token");
    if (!token) {
      console.warn("No token found in sessionStorage");
      return null;
    }

    const options = {
      url: `https://graduation-project-lilac-five.vercel.app/users/getAllSections/${id}`,
      method: "GET",
      headers: {
        Authorization: token,
      },
    };

    const { data } = await axios.request(options);
    if (data.message === "success") {
      console.log("API Response:", data); 
      return data;  
    } else {
      console.warn("Unexpected API response:", data);
      return data;
    }
  } catch (error) {
    console.error("Failed to fetch sections:", error);
    return null;
  }
}

export async function  getNewest() {
  try {
   const option = {
     url: "https://graduation-project-lilac-five.vercel.app/users/newListUpload",
     method: "GET",
      headers: {
       Authorization: sessionStorage.getItem("Token")
     }
   };

   const { data } = await axios.request(option);
   console.log("Newest Upload : ");
   
   console.log(data);
   
   if (data.message === "success") {        
      return data.videos
   }
 } catch (data) {
   console.error("Error during login:", data.message);
 }
}