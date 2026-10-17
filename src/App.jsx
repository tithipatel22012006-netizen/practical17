
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        const names = [
          "Tithi Patel",
          "Sonu Patel",
          "Siddhi Patel",
          "Riya Patel",
          "Rima Patel",
          "Dhruvi Patel",
          "Meshva Patel",
          "Happi Patel",
          "Krisha Patel",
          "Arju Patel",
        ];

        const cities = [
          "Unjha",
          "Patan",
          "Surat",
          "Bharuch",
          "Mehsana",
          "Ahmedabad",
          "Chanshma",
          "Palanpur",
          "Vapi",
          "Bhuj",
        ];

        const updatedStudents = data.map((student, index) => ({
          id: student.id,
          name: names[index],
          email: names[index].toLowerCase().replace(" ", "") + "@gmail.com",
          phone: String(5643216789 + index),
          city: cities[index],
        }));

        setStudents(updatedStudents);
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="app">
      <header className="header">
        <h1>Student List</h1>
        <p>Read Operation Using API</p>
      </header>

      <div className="container">
        <h2>Student Records</h2>

        {loading ? (
          <p className="message">Loading students...</p>
        ) : students.length === 0 ? (
          <p className="error">Unable to load students. Check your internet connection.</p>
        ) : (
          <>
            <p className="total">
              Total Students: {students.length}
            </p>

            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Student Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>City</th>
                  </tr>
                </thead>

                <tbody>
                  {students.map((student) => (
                    <tr key={student.id}>
                      <td>{student.id}</td>
                      <td>{student.name}</td>
                      <td>{student.email}</td>
                      <td>{student.phone}</td>
                      <td>{student.city}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>

      <footer>Student Management System</footer>
    </div>
  );
}

export default App;
