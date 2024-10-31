import React from "react";

const Announcement = () => {
  // Data for each announcement
  const announcements = [
    {
      title: "Magnam est ducimus",
      startDate: "Sep 25, 2024",
      endDate: "Sep 25, 2024",
      description: "At est quasi saepe p",
    },
    {
      title: "Magnam est ducimus",
      startDate: "Nov 25, 2022",
      endDate: "Nov 26, 2022",
      description: "At est quasi saepe p",
    },
    {
      title: "Project Meeting",
      startDate: "Mar 10, 2023",
      endDate: "Mar 26, 2023",
      description: "Lorem Ipsum, Or Lipsum",
    },
    {
      title: "Team Meeting",
      startDate: "Dec 4, 2023",
      endDate: "Dec 5, 2023",
      description: "Lorem Ipsum, Or Lipsum",
    },
    {
      title: "Event Related",
      startDate: "Oct 4, 2023",
      endDate: "Oct 5, 2023",
      description: "Lorem Ipsum, Or Lipsum",
    },
  ];

  return (
    <>
      <div className="col-xl-12 col-lg-12 col-md-12">
        <div className="card">
          <div className="card-header card-body table-border-style">
            <h5>Announcement List</h5>
          </div>
          <div className="card-body" style={{ height: 270, overflow: "auto" }}>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody className="list">
                  {announcements.map((announcement, index) => (
                    <tr key={index}>
                      <td>{announcement.title}</td>
                      <td>{announcement.startDate}</td>
                      <td>{announcement.endDate}</td>
                      <td>{announcement.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Announcement;
