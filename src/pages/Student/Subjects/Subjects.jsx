import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import SubjectCard from "../../../components/SubjectCard/SubjectCard";
import useAllSubjects from "../../../hooks/useAllSubjects"; // استيراد الـ Hook

export default function Subjects() {
  const { data: subjects, isLoading, isError } = useAllSubjects();

  if (isLoading) {
    return (
      <section className="container px-4 py-12 mx-auto space-y-5">
        <SectionTitle text={"Choose a Subject"} />
        <p className="mt-4 text-gray-500">Loading subjects...</p>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="container px-4 py-12 mx-auto space-y-5">
        <SectionTitle text={"Choose a Subject"} />
        <p className="mt-4 text-red-500">Error loading subjects...</p>
      </section>
    );
  }

  return (
    <section className="container px-4 py-12 mx-auto space-y-5">
      <SectionTitle text={"Choose a Subject"} />
      <div className="section-content grid grid-cols-12 gap-4">
        {subjects && subjects.length > 0 ? (
          subjects.map((subject) => (
            <SubjectCard key={subject._id} {...subject} btnName={"Lectures"} link={`/student/subject/${subject._id}`} />
          ))      
        ) : (
          <p className="mt-4 text-gray-500">No subjects available.</p>
        )}
      </div>
    </section>
  );
}
