// // HRMGO\hrmgo\src\components\DashboardMain\Timesheet\TimeSheet\TimeSheet.js

// import React from "react";

// import TimeSheetHeader from "./TimeSheetHeader";
// import TimeSheetTable from "./TimeSheetTable";
// import TimeSheetSearchForm from "./TimeSheetSearchForm";

// const TimeSheet = () => {
//   return (
//     <>
//       <TimeSheetHeader />
//       <div className="row">
//         <TimeSheetSearchForm />
//         <TimeSheetTable />
//       </div>
//     </>
//   );
// };

// export default TimeSheet;

import React, { useState } from "react";
import TimeSheetHeader from "./TimeSheetHeader";
import TimeSheetTable from "./TimeSheetTable";
import TimeSheetSearchForm from "./TimeSheetSearchForm";

const TimeSheet = () => {
  const [filters, setFilters] = useState({
    startDate: "",
    endDate: "",
    employeeId: "",
  });

  return (
    <>
      <TimeSheetHeader />
      <div className="row">
        <TimeSheetSearchForm setFilters={setFilters} />
        <TimeSheetTable filters={filters} />
      </div>
    </>
  );
};

export default TimeSheet;
