import React from "react";
import { Card } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ViewAll = () => {
  const employees = [
    {
      id: 1,
      name: "Amal E R",
      title: "Ui/Ux Developer",
      level: "Emp",
      basicSalary: "₹14,500.00",
      allowances: "₹200.00",
      grossSalary: "₹14,700.00",
      deduction: "₹700.00",
      netSalary: "₹14,000.00",
      status: "Paid",
      bankDetails: {
        ownerName: "Amal E R",
        bankName: "Axis Bank",
        accountNo: "987765432345",
        ifscCode: "AX123324",
      },
      salaryStructure: {
        workingHours: 270,
        transportAllowance: "₹1200",
        taxPaye: "09%",
      },
    },
    {
      id: 3,
      name: "Jaylon Vetros",
      title: "Ui/Ux Developer",
      level: "Emp",
      basicSalary: "₹14,500.00",
      allowances: "₹200.00",
      grossSalary: "₹14,700.00",
      deduction: "₹700.00",
      netSalary: "₹14,000.00",
      status: "Paid",
      bankDetails: {
        ownerName: "Jaylon Vetros",
        bankName: "Axis Bank",
        accountNo: "987765432345",
        ifscCode: "AX123324",
      },
      salaryStructure: {
        workingHours: 270,
        transportAllowance: "₹1200",
        taxPaye: "09%",
      },
    },
    {
      id: 4,
      name: "Anika P A",
      title: "Ui/Ux Developer",
      level: "Emp",
      basicSalary: "₹14,500.00",
      allowances: "₹200.00",
      grossSalary: "₹14,700.00",
      deduction: "₹700.00",
      netSalary: "₹14,000.00",
      status: "Paid",
      bankDetails: {
        ownerName: "Anika P A",
        bankName: "Axis Bank",
        accountNo: "987765432345",
        ifscCode: "AX123324",
      },
      salaryStructure: {
        workingHours: 270,
        transportAllowance: "₹1200",
        taxPaye: "09%",
      },
    },
    {
      id: 5,
      name: "Davis Levin",
      title: "Ui/Ux Developer",
      level: "Emp",
      basicSalary: "₹14,500.00",
      allowances: "₹200.00",
      grossSalary: "₹14,700.00",
      deduction: "₹700.00",
      netSalary: "₹14,000.00",
      status: "Paid",
      bankDetails: {
        ownerName: "Davis Levin",
        bankName: "Axis Bank",
        accountNo: "987765432345",
        ifscCode: "AX123324",
      },
      salaryStructure: {
        workingHours: 270,
        transportAllowance: "₹1200",
        taxPaye: "09%",
      },
    },
    {
      id: 6,
      name: "Martin Mango",
      title: "Ui/Ux Developer",
      level: "Emp",
      basicSalary: "₹14,500.00",
      allowances: "₹200.00",
      grossSalary: "₹14,700.00",
      deduction: "₹700.00",
      netSalary: "₹14,000.00",
      status: "Paid",
      bankDetails: {
        ownerName: "Martin Mango",
        bankName: "Axis Bank",
        accountNo: "987765432345",
        ifscCode: "AX123324",
      },
      salaryStructure: {
        workingHours: 270,
        transportAllowance: "₹1200",
        taxPaye: "09%",
      },
    },
    {
      id: 7,
      name: "Ann Franci",
      title: "Ui/Ux Developer",
      level: "Emp",
      basicSalary: "₹14,500.00",
      allowances: "₹200.00",
      grossSalary: "₹14,700.00",
      deduction: "₹700.00",
      netSalary: "₹14,000.00",
      status: "Paid",
      bankDetails: {
        ownerName: "Ann Franci",
        bankName: "Axis Bank",
        accountNo: "987765432345",
        ifscCode: "AX123324",
      },
      salaryStructure: {
        workingHours: 270,
        transportAllowance: "₹1200",
        taxPaye: "09%",
      },
    },
    {
      id: 8,
      name: "Ahmad Rosser",
      title: "Ui/Ux Developer",
      level: "Emp",
      basicSalary: "₹14,500.00",
      allowances: "₹200.00",
      grossSalary: "₹14,700.00",
      deduction: "₹700.00",
      netSalary: "₹14,000.00",
      status: "Paid",
      bankDetails: {
        ownerName: "Ahmad Rosser",
        bankName: "Axis Bank",
        accountNo: "987765432345",
        ifscCode: "AX123324",
      },
      salaryStructure: {
        workingHours: 270,
        transportAllowance: "₹1200",
        taxPaye: "09%",
      },
    },
    {
      id: 9,
      name: "Jaylon Press",
      title: "Ui/Ux Developer",
      level: "Emp",
      basicSalary: "₹14,500.00",
      allowances: "₹200.00",
      grossSalary: "₹14,700.00",
      deduction: "₹700.00",
      netSalary: "₹14,000.00",
      status: "Paid",
      bankDetails: {
        ownerName: "Jaylon Press",
        bankName: "Axis Bank",
        accountNo: "987765432345",
        ifscCode: "AX123324",
      },
      salaryStructure: {
        workingHours: 270,
        transportAllowance: "₹1200",
        taxPaye: "09%",
      },
    },
    {
      id: 10,
      name: "Marcus Curtis",
      title: "Ui/Ux Developer",
      level: "Emp",
      basicSalary: "₹14,500.00",
      allowances: "₹200.00",
      grossSalary: "₹14,700.00",
      deduction: "₹700.00",
      netSalary: "₹14,000.00",
      status: "Paid",
      bankDetails: {
        ownerName: "Marcus Curtis",
        bankName: "Axis Bank",
        accountNo: "987765432345",
        ifscCode: "AX123324",
      },
      salaryStructure: {
        workingHours: 270,
        transportAllowance: "₹1200",
        taxPaye: "09%",
      },
    },
    {
      id: 11,
      name: "Ruben Curtis",
      title: "Ui/Ux Developer",
      level: "Emp",
      basicSalary: "₹14,500.00",
      allowances: "₹200.00",
      grossSalary: "₹14,700.00",
      deduction: "₹700.00",
      netSalary: "₹14,000.00",
      status: "Paid",
      bankDetails: {
        ownerName: "Ruben Curtis",
        bankName: "Axis Bank",
        accountNo: "987765432345",
        ifscCode: "AX123324",
      },
      salaryStructure: {
        workingHours: 270,
        transportAllowance: "₹1200",
        taxPaye: "09%",
      },
    },
    {
      id: 12,
      name: "Makenna Calzoni",
      title: "Ui/Ux Developer",
      level: "Emp",
      basicSalary: "₹14,500.00",
      allowances: "₹200.00",
      grossSalary: "₹14,700.00",
      deduction: "₹700.00",
      netSalary: "₹14,000.00",
      status: "Paid",
      bankDetails: {
        ownerName: "Makenna Calzoni",
        bankName: "Axis Bank",
        accountNo: "987765432345",
        ifscCode: "AX123324",
      },
      salaryStructure: {
        workingHours: 270,
        transportAllowance: "₹1200",
        taxPaye: "09%",
      },
    },
    {
      id: 13,
      name: "Phillip Curtis",
      title: "Ui/Ux Developer",
      level: "Emp",
      basicSalary: "₹14,500.00",
      allowances: "₹200.00",
      grossSalary: "₹14,700.00",
      deduction: "₹700.00",
      netSalary: "₹14,000.00",
      status: "Paid",
      bankDetails: {
        ownerName: "Phillip Curtis",
        bankName: "Axis Bank",
        accountNo: "987765432345",
        ifscCode: "AX123324",
      },
      salaryStructure: {
        workingHours: 270,
        transportAllowance: "₹1200",
        taxPaye: "09%",
      },
    },
  ];

  const [expandedRow, setExpandedRow] = useState(null);

  const toggleRow = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  const navigate = useNavigate();

  const payslip = () => {
    navigate("/payslip");
  };

  return (
    <div className="container-fluid p-4">
      <h4 className="mb-3">Employee payroll</h4>
      <p>Details of each employee</p>
      <div className="table-responsive">
        <div className="px-4">
          <div className="d-flex">
            {/* Search Bar */}
            <div className="search-bar-wrapper">
              <input type="text" placeholder="Search" className="search-bar2" />
            </div>

            {/* Dropdowns */}
            <div className="dropdowns-wrapper">
              <select className="dropdown">
                <option>All Employee</option>
                {/* Add more options here */}
              </select>
            </div>
          </div>
        </div>
        <Card className="payroll3">
          <div className="custom-table-wrapper3">
            <div className="custom-table-header-row3">
              <div className="custom-table-header-cell3">S/N</div>
              <div className="custom-table-header-cell3">Employee</div>
              <div className="custom-table-header-cell3">Role</div>
              <div className="custom-table-header-cell3">Level</div>
              <div className="custom-table-header-cell3">Basic Salary</div>
              <div className="custom-table-header-cell3">Allowances</div>
              <div className="custom-table-header-cell3">Gross Salary</div>
              <div className="custom-table-header-cell3">Deduction</div>
              <div className="custom-table-header-cell3">Net Salary</div>
              <div className="custom-table-header-cell3">Status</div>
            </div>
            <div className="custom-table-content3">
              {employees.map((employee, index) => (
                <React.Fragment key={employee.id}>
                  <div
                    className="custom-table-content-row3"
                    onClick={() => toggleRow(index)}
                  >
                    <div className="custom-table-content-cell3">
                      {index + 1}
                    </div>
                    <div className="custom-table-content-cell3">
                      {employee.name}
                    </div>
                    <div className="custom-table-content-cell3">
                      {employee.title}
                    </div>
                    <div className="custom-table-content-cell3">
                      {employee.level}
                    </div>
                    <div className="custom-table-content-cell3">
                      {employee.basicSalary}
                    </div>
                    <div className="custom-table-content-cell3">
                      {employee.allowances}
                    </div>
                    <div className="custom-table-content-cell3">
                      {employee.grossSalary}
                    </div>
                    <div className="custom-table-content-cell3">
                      {employee.deduction}
                    </div>
                    <div className="custom-table-content-cell3">
                      {employee.netSalary}
                    </div>
                    <div className="custom-table-content-cell3 d-flex text-success">
                      {employee.status} <span>▾</span>
                    </div>
                  </div>
                  {expandedRow === index && (
                    <div className="custom-table-content-row3 expanded-row d-flex flex-column">
                      {/* Bank Details Section */}
                      <div className="expanded-row-section">
                        <strong>Bank Details</strong>
                        <div className="expanded-row-row">
                          <div className="expanded-row-item">
                            <strong>Bank Owner Name:</strong>{" "}
                            {employee.bankDetails.ownerName}
                          </div>
                          <div className="expanded-row-item">
                            <strong>Bank Name:</strong>{" "}
                            {employee.bankDetails.bankName}
                          </div>
                          <div className="expanded-row-item">
                            <strong>Bank Account No:</strong>{" "}
                            {employee.bankDetails.accountNo}
                          </div>
                          <div className="expanded-row-item">
                            <strong>IFSC Code:</strong>{" "}
                            {employee.bankDetails.ifscCode}
                          </div>
                        </div>
                      </div>

                      {/* Salary Structure Section */}
                      <div className="expanded-row-section mt-4">
                        <strong>Salary Structure</strong>
                        <div className="expanded-row-row">
                          <div className="expanded-row-item">
                            <strong>Working hours:</strong>{" "}
                            {employee.salaryStructure.workingHours} hours
                          </div>
                          <div className="expanded-row-item">
                            <strong>Transport allowance:</strong>{" "}
                            {employee.salaryStructure.transportAllowance}
                          </div>
                          <div className="expanded-row-item">
                            <strong>TAX/PAYE:</strong>{" "}
                            {employee.salaryStructure.taxPaye}
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-end px-5 py-2">
                        <button
                          className="btn btn-primary mt-3"
                          onClick={payslip}
                        >
                          Create payslip
                        </button>
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </Card>
      </div>
      <div className="d-flex justify-content-end px-5">
        <button className="btn btn-primary mt-3" onClick={payslip}>
          Create payslip
        </button>
      </div>
    </div>
  );
};

export default ViewAll;
