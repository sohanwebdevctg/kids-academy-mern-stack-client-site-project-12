
import Title from "../../../components/Title/Title";
import AllInstructors from "../AllInstructors/AllInstructors";
import InstructorsBanner from "../InstructorsBanner/InstructorsBanner";


const Instructors = () => {
  return (
    <div>
      {/* title section start */}
      <Title data={'Instructor'}></Title>
      {/* title section end */}
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