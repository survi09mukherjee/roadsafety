import { useState, useEffect } from "react";
import { database } from "./firebaseConfig";
import { ref, onValue } from "firebase/database";

function ViolationList() {
    const [violations, setViolations] = useState([]);

    useEffect(() => {
        const violationsRef = ref(database, "violations");
        onValue(violationsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) setViolations(Object.values(data));
        });
    }, []);

    return (
        <div>
            <h2>🚦 Helmet Violations</h2>
            {violations.length === 0 ? <p>No violations found.</p> :
                violations.map((violation, index) => (
                    <p key={index}>
                        🚗 {violation.number_plate} - {violation.timestamp}
                    </p>
                ))}
        </div>
    );
}

export default ViolationList;
