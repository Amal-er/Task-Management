import React, { useState } from "react";
import direction from "../assets/icons/direction.png";

function LocationTracker() {
  const [employeeData, setEmployeeData] = useState(null);
  const [nameInput, setNameInput] = useState("");
  const [idInput, setIdInput] = useState("");
  const [showHistory, setShowHistory] = useState(false); // State to manage history visibility

  // Dummy employee data for simulation
  const dummyData = [
    {
      name: "Amal ER",
      id: "A12345",
      location: "Pipeline Rd, South Kalamassery, Kalady",
      time: "02:00 PM",
      history: [
        {
          location: "Pipeline Rd, South Kalamassery, Kalady",
          time: "02:00 PM",
        },
        { location: "Kalamassery, Kalamassery HMT Road", time: "01:00 PM" },
        { location: "HMT Jun Kalamassery", time: "10:50 AM" },
        {
          location: "Pipeline Rd, South Kalamassery, Kalady",
          time: "10:00 AM",
        },
        { location: "Kalamassery, Kalamassery HMT Road", time: "09:00 AM" },
      ],
    },
    {
      name: "Ajith Kumar",
      id: "B54321",
      location: "MG Road, Ernakulam",
      time: "03:30 PM",
      history: [
        { location: "MG Road, Ernakulam", time: "03:30 PM" },
        { location: "Marine Drive, Ernakulam", time: "02:45 PM" },
        { location: "Vyttila Junction", time: "01:15 PM" },
        { location: "Kadavanthra, Ernakulam", time: "12:00 PM" },
        { location: "Edappally, Ernakulam", time: "10:30 AM" },
      ],
    },
    {
      name: "Anandhu ajay",
      id: "C98765",
      location: "Aluva, Periyar Nagar",
      time: "04:15 PM",
      history: [
        { location: "Aluva, Periyar Nagar", time: "04:15 PM" },
        { location: "Aluva, Market Road", time: "03:30 PM" },
        { location: "Angamaly Junction", time: "02:15 PM" },
        { location: "Nedumbassery, Kochi Airport", time: "01:00 PM" },
        { location: "Chengamanad, Aluva", time: "11:45 AM" },
      ],
    },
  ];

  const handleFindClick = () => {
    const foundEmployee = dummyData.find(
      (employee) => employee.name === nameInput && employee.id === idInput
    );

    if (foundEmployee) {
      setEmployeeData(foundEmployee);
      setShowHistory(false); // Hide history initially when finding a new employee
    } else {
      setEmployeeData(null);
      alert("Employee not found. Please check the name and ID.");
    }
  };

  const handleDirectionClick = () => {
    if (employeeData) {
      const startLocation = "Your Start Location";
      const destination = employeeData.location;
      const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
        startLocation
      )}&destination=${encodeURIComponent(destination)}&travelmode=driving`;

      window.open(googleMapsUrl, "_blank");
    }
  };

  const toggleHistory = () => {
    setShowHistory((prev) => !prev);
  };

  return (
    <div style={{ backgroundColor: "#E2EBFC", minHeight: "100vh" }}>
      <div className="px-3">
        <div className="w-100">
          <div className="">
            <div className="">
              <div className="card-body p-0">
                <div className="embed-responsive embed-responsive-21by9">
                  <iframe
                    className="embed-responsive-item"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d62865.59735674627!2d76.30428739760744!3d10.008611907476451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1725347513531!5m2!1sen!2sin"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ width: "100%", height: "550px", border: "0" }}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="w-100 h-100">
            <form
              className="mapbot"
              style={{ height: "auto", borderRadius: "5px" }}
            >
              <div className="d-flex justify-content-between align-items-center px-5 pt-4">
                <h2>Find Employee</h2>
              </div>
              <hr />
              <div className="d-flex px-5 gap-5">
                <input
                  className="p-3 border"
                  placeholder="Enter Employee Name"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  style={{
                    borderColor: "black",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderRadius: "5px",
                  }}
                />
                <div className="ms-3">
                  <input
                    className="p-3 border"
                    placeholder="Enter Employee ID"
                    value={idInput}
                    onChange={(e) => setIdInput(e.target.value)}
                    style={{
                      borderColor: "black",
                      borderWidth: "1px",
                      borderStyle: "solid",
                      borderRadius: "5px",
                    }}
                  />
                </div>
                {employeeData && (
                  <button
                    type="button"
                    className="btn btn-secondary ms-auto"
                    onClick={toggleHistory}
                  >
                    History
                  </button>
                )}
              </div>
              <div className="d-flex px-5 pt-4">
                <button
                  type="button"
                  className="bg-primary find px-5 py-1"
                  onClick={handleFindClick}
                >
                  Find
                </button>
              </div>
              {employeeData && (
                <>
                  <div className="employee-info mt-4 px-5">
                    <div className="crntloco d-flex align-items-center justify-content-between">
                      <p>
                        <strong className="crntlocoH">Current Location:</strong>{" "}
                        <span>{employeeData.location}</span>
                      </p>
                      <div className="direction">
                        <img
                          className="direction"
                          src={direction}
                          alt="Direction"
                          onClick={handleDirectionClick}
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    </div>
                    <p>
                      <strong className="crntlocoH">Time:</strong>{" "}
                      {employeeData.time}
                    </p>
                  </div>
                  {showHistory && (
                    <div className="mt-4">
                      <h5 className="px-5">History</h5>
                      <hr />
                      <div className="px-5">
                        {employeeData.history.map((entry, index) => (
                          <div
                            key={index}
                            className="d-flex justify-content-between"
                          >
                            <p className="crntlocoH">
                              Location :{" "}
                              <span className="entclr">{entry.location}</span>
                            </p>
                            <p>Time : {entry.time}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationTracker;

// ------------------
