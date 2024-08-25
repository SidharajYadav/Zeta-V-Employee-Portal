import React, { useState } from 'react';
import { FaUpload, FaFilePdf, FaFileExcel, FaFileWord } from 'react-icons/fa';

const Report = () => {
  // Initialize with demo reports
  const [reports, setReports] = useState([
    {
      id: 1,
      name: 'Annual Report 2023.pdf',
      url: '/path-to-your-demo-files/annual-report-2023.pdf',
      type: 'application/pdf',
    },
    {
      id: 2,
      name: 'Financial Summary.xlsx',
      url: '/path-to-your-demo-files/financial-summary.xlsx',
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    },
    {
      id: 3,
      name: 'Project Plan.docx',
      url: '/path-to-your-demo-files/project-plan.docx',
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    },
  ]);
  
  const [file, setFile] = useState(null);

  // Handle file selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Simulate file upload and add to reports list
  const handleUpload = () => {
    if (file) {
      const newReport = {
        id: Date.now(),
        name: file.name,
        url: URL.createObjectURL(file), // Create a local URL for the file
        type: file.type,
      };
      setReports([...reports, newReport]);
      setFile(null);
    }
  };

  // Handle file download
  const handleDownload = (url, name) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = name;
    link.click();
  };

  // Determine file icon based on file type
  const getFileIcon = (type) => {
    if (type.includes('pdf')) return <FaFilePdf />;
    if (type.includes('excel')) return <FaFileExcel />;
    if (type.includes('word')) return <FaFileWord />;
    return <FaFilePdf />;
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen font-sans">
      {/* Header */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <div className="flex flex-col space-y-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Upload Report
          </label>
          <div className="flex space-x-2 items-center">
            <input
              type="file"
              onChange={handleFileChange}
              className="block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <button
              onClick={handleUpload}
              className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-[#50a49a]"
            >
              <FaUpload className="mr-1" /> Upload
            </button>
          </div>
        </div>
      </div>

      {/* Report List */}
      <div className="bg-white p-4 rounded shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-md font-bold text-gray-900 tracking-wider">Name</th>
              <th className="px-4 py-3 text-left text-md font-bold text-gray-900 tracking-wider">Type</th>
              <th className="px-4 py-3 text-left text-md font-bold text-gray-900 tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {reports.map((report) => (
              <tr key={report.id}>
                <td className="px-4 py-2 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    {getFileIcon(report.type)}
                    <span>{report.name}</span>
                  </div>
                </td>
                <td className="px-4 py-2 text-sm text-gray-500">{report.type}</td>
                <td className="px-4 py-2 text-sm text-gray-500">
                  <button
                    onClick={() => handleDownload(report.url, report.name)}
                    className="text-white hover:underline bg-[#50a49a] p-2 rounded-lg"
                  >
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Report;
