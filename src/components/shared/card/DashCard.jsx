import { Card, CardBody } from "@nextui-org/react";

const DashCard = () => {
  return (
    <div className="grid grid-cols-3 gap-3">
      <Card shadow="lg">
        <CardBody className="text-center h-32 ">
          <h1 className="text-2xl font-semibold font-arbo">307.48K</h1>
          <p>Total Customar</p>
          <h1>+30</h1>
          <p>Last 30 days</p>
        </CardBody>
      </Card>
      <Card shadow="lg">
        <CardBody className="text-center h-32 ">
          <h1 className="text-2xl font-semibold font-arbo">307.48K</h1>
          <p>Total Customar</p>
          <h1>+30</h1> 
          <p>Last 30 days</p>
        </CardBody>
      </Card>
      <Card shadow="lg">
        <CardBody className="text-center h-32 ">
          <h1 className="text-2xl font-semibold font-arbo">307.48K</h1>
          <p>Total Customar</p>
          <h1>+30</h1>
          <p>Last 30 days</p>
        </CardBody>
      </Card>
    </div>
  );
};

export default DashCard;
