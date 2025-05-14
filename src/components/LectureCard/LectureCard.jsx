import { Link } from 'react-router-dom';

export default function LectureCard({ courseTitle, fileName, numOfLec, _id,btnName }) {
  
  const subjectId = sessionStorage.getItem("Lectures ID");  
  return (
    <article
      role="region"
      aria-labelledby={`lecture-${courseTitle}`}
      tabIndex="0"
      className="col-span-12 
      md:col-span-4 lg:col-span-3 bg-white shadow-md rounded-2xl p-6
       border border-gray-300 hover:shadow-xl transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <h3 className="text-xl font-bold text-gray-800 mb-2">
        Session: {numOfLec}
      </h3>

      <p className="text-gray-700 mb-1">
        <span className="font-semibold">Topic:</span>{' '}
        <span>{fileName}</span>
      </p>

      <div className="mt-2">
        <Link
          to={`/student/topic/${subjectId}/content/${_id}`} 
          className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-md shadow-md hover:from-blue-600 hover:to-indigo-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          View {btnName}
        </Link>
      </div>
    </article>
  );
}
