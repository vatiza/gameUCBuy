import { Card, CardBody } from "@nextui-org/react";
import useTotalUser from "../../../hooks/useTotalUser";
import { FaCartArrowDown, FaPerson, FaRegClock } from "react-icons/fa6";
import useGetAllCarts from "../../../hooks/useGetAllCarts";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

const DashCard = () => {
  const [totalUsers, , loading] = useTotalUser();
  const [allCarts] = useGetAllCarts();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-3 gap-3">
      <Card className="bg-blue-200" shadow="lg">
        <CardBody className=" h-32  ">
          <div className="flex items-center my-auto justify-around">
            <div>
              <h1 className="text-5xl font-semibold font-arbo">
                {totalUsers.length}K
              </h1>
              <p className="text-sm">Total Members</p>
            </div>
            <FaPerson className="text-6xl" />
          </div>
        </CardBody>
      </Card>
      <Card className="bg-danger-100" shadow="lg">
        <CardBody className=" h-32 ">
          <div className="flex items-center my-auto justify-around">
            <div>
              <h1 className="text-5xl font-semibold font-arbo">
                {allCarts.length}K
              </h1>
              <p>Pending</p>
            </div>
            <FaRegClock className="text-6xl" />
          </div>
        </CardBody>
      </Card>
      <Card className="bg-success-100" shadow="lg">
        <CardBody className="text-center h-32 ">
          <div className="flex items-center my-auto justify-around">
            <div>
              <h1 className="text-5xl font-semibold font-arbo">
                {totalUsers.length}K
              </h1>
              <p>Orders Completed</p>
            </div>
            <IoCheckmarkDoneCircleOutline className="text-6xl" />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default DashCard;
