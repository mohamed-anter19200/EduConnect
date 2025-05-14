import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import SubjectCard from "../../../components/SubjectCard/SubjectCard";
import useAllSections from "../../../hooks/useAllSections";

 
export default function Sections() {
  const {data: subjects, isLoading, isError } = useAllSections();
  if (isLoading) {
      return (
        <section className="container px-4 py-12 mx-auto space-y-5">
          <SectionTitle text={"Choose a Subject"} />
          <p className="mt-4 text-gray-500">Loading Sections...</p>
        </section>
      );
    }
  
    if (isError) {
      return (
        <section className="container px-4 py-12 mx-auto space-y-5">
          <SectionTitle text={"Choose a Subject"} />
          <p className="mt-4 text-red-500">Error loading Sections...</p>
        </section>
      );
    }

  return (
   <section className="container px-4 py-12 mx-auto space-y-5">
      <SectionTitle text={"Choose a Section"} />
      <div className="section-content grid grid-cols-12 gap-4">
        {subjects && subjects.length > 0 ? (
            subjects.map((subject) => (
              <SubjectCard key={subject._id} {...subject} btnName={"Sections"} link={`/student/section/${subject._id}`} />
            ))
          ) : (
            <p className="mt-4 text-gray-500">No sections available.</p>
        )}
      </div>
  </section>
  )
}
