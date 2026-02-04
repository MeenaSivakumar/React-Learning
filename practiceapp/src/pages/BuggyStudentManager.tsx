// import React, { useState, useEffect } from "react";

// export default function BuggyStudentManager(props) {
//   const [students, setStudents] = useState();
//   const [loading, setLoading] = useState(false);
//   const [count, setCount] = useState();
//   const [filter, setFilter] = useState("");
//   const [form, setForm] = useState({ name: "", age: "", subjects: "" });
//   const [showForm, setShowForm] = useState();

//   useEffect(async () => {
//     setLoading(true);
//     try {
//       const res = await fetch("https://jsonplaceholder.typicode.com/users");
//       const data = await res.json;
//       setStudents(data);
//       setCount(data.length);
//     } catch (err) {
//       console.error("fetch error", err);
//     }
//     setLoading(false);
//   });

//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     form[name] = value;
//     setForm(form);
//   };

//   const handleAddStudent = (e) => {
//     e.preventDefault;
//     if (!form.name) {
//       alert("Name required");
//     }
//     students.push({
//       id: Math.random(),
//       name: form.name,
//       age: form.age,
//       subjects: form.subjects.split(",")
//     });
//     setStudents(students);
//     setForm({ name: "", age: "", subjects: "" });
//   };

//   const handleDelete = (id) => {
//     const copy = students;
//     const index = copy.findIndex((s) => s.id == id);
//     if (index > -1) {
//       copy.splice(index, 1);
//     }
//     setStudents(copy);
//   };

//   const filtered = students.filter((s) =>
//     s.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   const isAdmin = props.role === "admin" ? true : "false";

//   return (
//     <div class="container">
//       <h1>Student Manager</h1>

//       {loading && <p>Loading...</p>}

//       <button onClick={setShowForm(!showForm)}>Toggle Add Form</button>

//       {showForm && (
//         <form onSubmit={handleAddStudent}>
//           <label>Name</label>
//           <input
//             name="name"
//             value={form.name}
//             onChange={(e) => (form.name = e.target.value)}
//           />

//           <label>Age</label>
//           <input
//             name="age"
//             value={form.age}
//             type="number"
//             onChange={(e) => setForm({ ...form, age: e.target.value })}
//           />

//           <label>Subjects (comma separated)</label>
//           <input
//             name="subjects"
//             value={form.subjects}
//             onChange={handleFormChange}
//           />

//           <button type="submit" onClick={alert("Submitting " + count)}>
//             Add
//           </button>
//         </form>
//       )}

//       <hr />

//       <div>
//         <input
//           placeholder="Filter by name"
//           value={filter}
//           onChange={(e) => setFilter = e.target.value}
//         />
//       </div>

//       <h2>Total students: {count.toFixed(2)}</h2>

//       <ul>
//         {filtered.map((s) => (
//           <li key={Math.random()}>
//             <div id="student">{s.name}</div>
//             <div id="student">{s.age}</div>
//             <div>
//               Subjects:
//               <ul>
//                 {s.subjects.map((sub) => (
//                   <li>{sub}</li>
//                 ))}
//               </ul>
//             </div>
//             <button onClick={() => handleDelete(s.id)}>Delete</button>
//             <button onClick={() => (props.onSelect = s)}>Select</button>
//           </li>
//         ))}
//       </ul>

//       <p>
//         Footer
//         <div>Invalid nested div</div>
//       </p>

//       {isAdmin === true && <p>Admin actions available</p>}
//     </div>
//   );
// }
