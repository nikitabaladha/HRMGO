// import React from "react";

// import { TbReport } from "react-icons/tb";
// import { CiCalendarDate } from "react-icons/ci";
// import { TbCircleCheck } from "react-icons/tb";
// import { TbCircleX } from "react-icons/tb";
// import { TbCircleMinus } from "react-icons/tb";

// // Card data configuration
// const cardData = [];

// const LeaveReport = () => {
//   return (
//     <>
//       <div id="printableArea" className="">
//         <div className="row">
//           <div className="col">
//             <div className="card">
//               <div className="card-body p-3">
//                 <div className="d-flex align-items-center justify-content-between">
//                   <div className="d-flex align-items-center">
//                     <div className="theme-avtar bg-primary">
//                       <TbReport />
//                     </div>
//                     <div className="ms-3">
//                       <input
//                         type="hidden"
//                         defaultValue="All Branch Nov-2024 Monthly Leave Report of All Department"
//                         id="filename"
//                       />
//                       <h5 className="mb-0">Report</h5>
//                       <div>
//                         <p className="text-muted text-sm mb-0">
//                           Monthly Leave Summary
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col">
//             <div className="card">
//               <div className="card-body p-3">
//                 <div className="d-flex align-items-center justify-content-between">
//                   <div className="d-flex align-items-center">
//                     <div className="theme-avtar bg-secondary">
//                       <CiCalendarDate />
//                     </div>
//                     <div className="ms-3">
//                       <h5 className="mb-0">Duration</h5>
//                       <p className="text-muted text-sm mb-0">Nov-2024</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-lg-4 col-md-6">
//             <div className="card">
//               <div className="card-body p-3">
//                 <div className="d-flex align-items-center justify-content-between">
//                   <div className="d-flex align-items-center">
//                     <div className="theme-avtar bg-primary">
//                       <TbCircleCheck />
//                     </div>
//                     <div className="ms-3">
//                       <h5 className="mb-0">Approved Leaves </h5>
//                       <p className="text-muted text-sm mb-0">3</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6">
//             <div className="card">
//               <div className="card-body p-3">
//                 <div className="d-flex align-items-center justify-content-between">
//                   <div className="d-flex align-items-center">
//                     <div className="theme-avtar bg-secondary">
//                       <TbCircleX />
//                     </div>
//                     <div className="ms-3">
//                       <h5 className="mb-0">Rejected Leave</h5>
//                       <p className="text-muted text-sm mb-0">4</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6">
//             <div className="card">
//               <div className="card-body p-3">
//                 <div className="d-flex align-items-center justify-content-between">
//                   <div className="d-flex align-items-center">
//                     <div className="theme-avtar bg-primary">
//                       <TbCircleMinus />
//                     </div>
//                     <div className="ms-3">
//                       <h5 className="mb-0">Pending Leaves</h5>
//                       <p className="text-muted text-sm mb-0">5</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LeaveReport;

// =================================================================

import React from "react";
import {
  TbReport,
  TbCircleCheck,
  TbCircleX,
  TbCircleMinus,
} from "react-icons/tb";
import { CiCalendarDate } from "react-icons/ci";

// Card data configuration
const cardData = [
  {
    id: 1,
    icon: <TbReport />,
    backgroundColor: "bg-primary",
    title: "Report",
    subtitle: "Monthly Leave Summary",
    isLarge: true, // Flag to make this card large (col-md-6)
  },
  {
    id: 2,
    icon: <CiCalendarDate />,
    backgroundColor: "bg-secondary",
    title: "Duration",
    subtitle: "Nov-2024",
    isLarge: true, // Flag to make this card large (col-md-6)
  },
  {
    id: 3,
    icon: <TbCircleCheck />,
    backgroundColor: "bg-primary",
    title: "Approved Leaves",
    subtitle: "3",
    isLarge: false, // Flag to make this card small (col-md-4)
  },
  {
    id: 4,
    icon: <TbCircleX />,
    backgroundColor: "bg-secondary",
    title: "Rejected Leave",
    subtitle: "4",
    isLarge: false, // Flag to make this card small (col-md-4)
  },
  {
    id: 5,
    icon: <TbCircleMinus />,
    backgroundColor: "bg-primary",
    title: "Pending Leaves",
    subtitle: "5",
    isLarge: false, // Flag to make this card small (col-md-4)
  },
];

// Reusable Card Component
const Card = ({ icon, backgroundColor, title, subtitle, isLarge }) => (
  <div className={`col-md-${isLarge ? 6 : 4} col-lg-${isLarge ? 6 : 4}`}>
    <div className="card">
      <div className="card-body p-3">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <div className={`theme-avtar ${backgroundColor}`}>{icon}</div>
            <div className="ms-3">
              <h5 className="mb-0">{title}</h5>
              <p className="text-muted text-sm mb-0">{subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const LeaveReport = () => {
  return (
    <div id="printableArea">
      <div className="row">
        {cardData.map((card) => (
          <Card
            key={card.id}
            icon={card.icon}
            backgroundColor={card.backgroundColor}
            title={card.title}
            subtitle={card.subtitle}
            isLarge={card.isLarge}
          />
        ))}
      </div>
    </div>
  );
};

export default LeaveReport;
