// src/ResponsiveTable.js
import React from 'react';
import './ResponsiveTable.css';

const ResponsiveTable = () => {
  const data = [
    { id: 1, name: 'Rakesh Sharma',rankUrl:"images/rank1.jpeg", age: 42,designation: "UI/UX Designer",hours:"7(42)", changes: 1.5,imageUrl: "images/download.jpeg",arrow:"images/uside-arrow.png" },
    { id: 2, name: 'Ankita Thakur',rankUrl:"images/rank2.webp", age: 41,designation: "HR Recruiter", hours: '7(41)', changes: 1.5,imageUrl: "images/profile2.jpeg",arrow:"images/downside-arrow.png"  },
    { id: 3, name: 'Sarah Yadav',rankUrl:"images/rank3.jpeg", age: 40,designation: "Product Manager", hours: '7(40)', changes: 1.5,imageUrl: "images/profile3.jpeg",arrow:"images/uside-arrow.png"  },
    { id: 4, name: 'Harsha Shivhare',rankUrl:"images/image.png", age: 37,designation: "Designer", hours: '7(37)', changes: 1.5,imageUrl: "images/profile4.jpeg",arrow:"images/uside-arrow.png"  },
    { id: 5, name: 'Vanhi Rai',rankUrl:"images/image.png", age: 37,designation: "Video Editor", hours: '7(37)', changes: 1.5,imageUrl: "images/profile5.jpeg",arrow:"images/downside-arrow.png" },
    { id: 6, name: 'Bhanu Sharma',rankUrl:"images/image.png", age: 32,designation: "Buisness Analyst", hours: '7(32)', changes: 1.5,imageUrl: "images/profile6.jpeg",arrow:"images/downside-arrow.png" },
    { id: 7, name: 'Sunil Yadav',rankUrl:"images/image.png", age: 24,designation: "Developer", hours: '7(24)', changes: 1.5,imageUrl: "images/profile7.jpeg",arrow:"images/uside-arrow.png"  },
    { id: 8, name: 'Akash Roy',rankUrl:"images/image.png", age: 21,designation: "Buisness Analyst", hours: '7(21)', changes: 1.5,imageUrl: "images/profile8.jpeg",arrow:"images/downside-arrow.png" },
    { id: 9, name: 'Rohit Soni',rankUrl:"images/image.png", age: 20,designation: "Developer", hours: '7(20)', changes: 1.5,imageUrl: "images/profile2.jpeg",arrow:"images/downside-arrow.png" },
    { id: 10, name: 'Suraj Chauhan',rankUrl:"images/image.png", age: 18,designation: "Developer", hours: '7(18)', changes: 1.5,imageUrl: "images/profile2.jpeg",arrow:"images/downside-arrow.png" },

  ];

  const sortedData = data.sort((a, b) => b.age - a.age);
  const processedData = sortedData.map((item, index) => ({
    ...item,
    id: index + 1
  }));

  const firstProfile = processedData.length > 0 ? processedData[0] : null;

  const currentDateTime = new Date().toLocaleString();

  return (
    
    <div className="container">
      <div className="table-wrapper">
        <div className="table-container">
        
        <h1 className='heading_main'>
        <img className='main-logo' src={'logo192.png'}></img>
        Employees Activity Dashboard</h1>
          <table>
            <thead>
              <tr>
                <th className='rank-heading'>Rank</th>
                <th>Name</th>
                <th>Designation</th>
                <th>No. of hours worked</th>
                <th>Changes</th>
              </tr>
            </thead>
            <tbody>
              {processedData.map((item) => (
                <tr key={item.id}>
                
                  <td data-label="ID">
                  <img className='rank_logo' src={item.rankUrl} ></img>
                  {item.id}</td>
                  <td data-label="Name"><div className="name-cell">
                      <img className="profile-photo" src={item.imageUrl} alt="image"  />
                      {item.name}
                    </div></td>
                  <td data-label="designation">{item.designation}</td>
                  <td data-label="hours">{item.hours}</td>
                  <td data-label="changes">
                  <img className='up-down-arrow' src={item.arrow} alt='up/down'></img>
                  {item.changes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {firstProfile && (
        <div className="profile-section">
            <div className="date-time">{currentDateTime}</div>
        <div className="image-container">
              
          <img className='top-profile-image' src={firstProfile.imageUrl} alt="Sample" />
          <h3 className='certi_heading'>Employee Of The Month</h3>
          <h6 className='certi_name'>{firstProfile.name}</h6>
          <p className='certi_designation'>{firstProfile.designation}</p>
          <img className='end_certi_image' src={'images/endImageCertificate.jpg'} alt='image'></img>
        </div>
      </div>
        )}
      </div>
    </div>
  );
};

export default ResponsiveTable;
