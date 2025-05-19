import React, { useState, useEffect } from "react";
import axios from "axios";

const Attendance = ({ employeeId }) => {
    const [attendance, setAttendance] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchAttendance();
    }, [employeeId]);

    const fetchAttendance = async () => {
        try {
            const res = await axios.get(`http://localhost:5001/api/attendance/${employeeId}`);
            // setAttendance(res.data);
        } catch (error) {
            console.error("Error fetching attendance", error);
        }
    };

    const markCheckIn = async () => {
        try {
            // await axios.post("http://localhost:5001/api/attendance/check-in", { employee_id: 8 });
            setLoading(true);
            const newEntry = {
                id: Date.now(),
                date: new Date().toLocaleDateString(),
                check_in: new Date().toLocaleTimeString(),
                check_out: null,
                status: "Checked In"
            };
            setAttendance([...attendance, newEntry]);
            setLoading(false);
            await axios.post("http://localhost:5001/api/attendance/check-in", { employee_id: 3 });
            // alert("Checked in successfully!");
        } catch (error) {
            console.error("Error checking in", error);
        }
    };


    const markCheckOut = async () => {
        setLoading(true);
        try {
            setLoading(true);
            setAttendance(prevAttendance =>
                prevAttendance.map(entry =>
                    entry.check_out === null
                        ? { ...entry, check_out: new Date().toLocaleTimeString(), status: "Checked Out" }
                        : entry
                )
            );
            setLoading(false);
            await axios.post("http://localhost:5001/api/attendance/check-out", { employee_id: 3 });
            fetchAttendance();
        } catch (error) {
            console.error("Error checking out", error);
            console.log("Received Employee ID in Component:", employeeId);
        }
        setLoading(false);
    };


    return (
        
        <div className="attendance-container">
            <h2>Attendance Tracker</h2>
            <button onClick={markCheckIn} disabled={loading}>Check In</button>
            <button onClick={markCheckOut} disabled={loading}>Check Out</button>

            <h3>Attendance History</h3>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Check-in</th>
                        <th>Check-out</th>
                        <th>Status</th>
                    </tr>
                </thead>
                {/* <tbody>
                    {attendance.map((entry) => (
                        <tr key={entry.id}>
                            <td>{entry.date}</td>
                            <td>{entry.check_in || "N/A"}</td>
                            <td>{entry.check_out || "N/A"}</td>
                            <td>{entry.status}</td>
                        </tr>
                    ))}
                </tbody> */}
                <tbody>
                    {attendance.map((entry) => (
                        <tr key={entry.id}>
                            <td data-label="Date">{entry.date}</td>
                            <td data-label="Check-in">{entry.check_in || "N/A"}</td>
                            <td data-label="Check-out">{entry.check_out || "N/A"}</td>
                            <td data-label="Status">{entry.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Attendance;





