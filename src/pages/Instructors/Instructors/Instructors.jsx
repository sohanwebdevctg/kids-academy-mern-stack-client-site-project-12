
import AllInstructors from "../AllInstructors/AllInstructors";
import InstructorsBanner from "../InstructorsBanner/InstructorsBanner";


const Instructors = () => {
  return (
    <div>
      {/* content section start */}
      {/* banner section start */}
      <InstructorsBanner></InstructorsBanner>
      {/* banner section end */}
      {/* allInstructors section start */}
      <AllInstructors></AllInstructors>
      {/* allInstructors section end */}
      {/* content section end */}
    </div>
  );
};

export default Instructors;