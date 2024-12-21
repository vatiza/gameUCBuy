import {
    Button,
    Input,
    Radio,
    RadioGroup,
    Slider,
    Textarea,
} from "@nextui-org/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaMinus, FaPlus } from "react-icons/fa";

const AddNewProducts = () => {
  const [counts, setCounts] = useState(1);
  const [fields, setFields] = useState([{ uc: "", amount: "" }]);
  const [discount, setDiscount] = useState(0.2);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const fieldIncrease = () => {
    const newCount = counts + 1;
    setCounts(newCount);
    setFields([...fields, { uc: "", amount: "" }]);
  };
  const fieldDescrease = () => {
    if (counts > 1) {
      const newCount = counts - 1;
      setCounts(newCount);
      setFields([...fields.slice(0, -1)]);
    }
  };
  const handleFields = (index, fieldName, value) => {
    const updatedFields = fields.map((field, i) =>
      i === index ? { ...field, [fieldName]: value } : field
    );
    setFields(updatedFields);
  };

  const onSubmit = async (data) => {
    const product = {
      discount: discount,
    };
    console.log(data, product);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">New Product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4">
          <div className=" border p-4 rounded-lg">
            <div>
              <h1>Description</h1>
              <div className="border p-5 rounded-lg">
                <Input
                  required
                  className="max-w-xs"
                  label="Product Name"
                  type="text"
                  {...register("pname", { required: "Required" })}
                />
                <Textarea
                  required
                  className="max-w-xs mt-5"
                  label="Description"
                  placeholder="Enter your description"
                  {...register("description", { required: "Required" })}
                />
              </div>
            </div>
            <div className="mt-5 border rounded-lg p-5">
              <h1>Category</h1>
              <RadioGroup label="Select product category">
                <Radio
                  {...register("category", { required: "Required" })}
                  value="game"
                >
                  Game
                </Radio>
                <Radio
                  {...register("category", { required: "Required" })}
                  value="gift-card"
                >
                  Gift Card
                </Radio>
                <Radio
                  {...register("category", { required: "Required" })}
                  value="card"
                >
                  Card
                </Radio>
              </RadioGroup>
            </div>
          </div>

          <div className="border p-4 rounded-lg">
            <h1>Prouct Image</h1>
            <input
              required
              id="file-upload"
              type="file"
              className="max-w-xs border border-gray-300 rounded-md my-2 px-3 py-2 text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <h1>Price</h1>
            <div className="border p-5 rounded-lg ">
              <div className="flex  gap-4">
                <Button
                  onClick={() => fieldDescrease()}
                  color="danger"
                  size="sm"
                >
                  <FaMinus />
                </Button>
                <Button
                  onClick={() => fieldIncrease()}
                  color="primary"
                  size="sm"
                >
                  <FaPlus />
                </Button>
              </div>
              <div>
                {fields.map((field, index) => (
                  <div key={index} className="grid grid-cols-2 gap-4 mt-3">
                    <Input
                      isRequired
                      label="UC"
                      type="text"
                      value={field.uc}
                      onChange={(e) =>
                        handleFields(index, "uc", e.target.value)
                      }
                    />
                    <Input
                      isRequired
                      label="Amount"
                      type="number"
                      value={field.amount}
                      onChange={(e) =>
                        handleFields(index, "amount", e.target.value)
                      }
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <Slider
                className="max-w-md"
                defaultValue={0.2}
                formatOptions={{ style: "percent" }}
                label="Discount"
                marks={[
                  {
                    value: 0.2,
                    label: "20%",
                  },
                  {
                    value: 0.5,
                    label: "50%",
                  },
                  {
                    value: 0.8,
                    label: "80%",
                  },
                ]}
                maxValue={1}
                minValue={0}
                showTooltip={true}
                step={0.1}
                onChange={(value) => setDiscount(value)}
              />
            </div>
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddNewProducts;
