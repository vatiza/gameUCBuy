import {
  Button,
  Input,
  Progress,
  Radio,
  RadioGroup,
  Slider,
  Textarea,
} from "@nextui-org/react";
import { useState } from "react";
import { set, useForm } from "react-hook-form";
import { FaMinus, FaPlus } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast, { Toaster } from "react-hot-toast";

const AddNewProducts = () => {
  const [counts, setCounts] = useState(1);
  const [fields, setFields] = useState([{ uc: "", amount: "" }]);
  const [discount, setDiscount] = useState(0.2);
  const [priceRange, setPriceRange] = useState(["1000", "5000"]);
  const rating = 3.4;
  const [loading, setLoading] = useState(false);
  const [productImgURL, setProductImgURL] = useState("");
  const [postingLoading, setPostingLoading] = useState(false);
  const axiosSecure = useAxiosSecure();
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
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    setLoading(true);
    const data = new FormData();
    data.append("file", file);
    data.append(
      "upload_preset",
      `${import.meta.env.VITE_Cloudinary_UPLOAD_PRESET}`
    );
    data.append("cloud_name", `${import.meta.env.VITE_Cloudinary_CLOUD_NAME}`);
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${
        import.meta.env.VITE_Cloudinary_CLOUD_NAME
      }/image/upload`,
      {
        method: "POST",
        body: data,
      }
    );
    const uploadImageURL = await response.json();
    setProductImgURL(uploadImageURL.url);
    setLoading(false);
  };

  const onSubmit = async (data) => {
    setPostingLoading(true);
    const loadingToastId = toast.loading("Posting...");
    const product = {
      category: data.category,
      title: data.pname,
      priceRange: priceRange,
      discount: discount,
      rating: rating,
      description: data.description,
      image: productImgURL,
      uc: fields,
    };
    const res = await axiosSecure.post("/products", product);
    if (res.status === 200) {
      toast.dismiss(loadingToastId);
      toast.success("Added New Product Successfully !");
      setPostingLoading(false);
    }
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
              <RadioGroup
                label="Select product category"
                {...register("category", { required: "Required" })}
              >
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

          <div className="border p-4 rounded-lg ">
            <h1>Product Image</h1>
            <div className=" border-dotted border-2  top-1/2   rounded-lg ">
              {loading ? (
                <Progress
                  className="max-w-md"
                  label="Uploading..."
                  value={55}
                />
              ) : null}
              {productImgURL ? (
                <img
                  src={productImgURL}
                  alt="product"
                  className="w-40 h-40 cover rounded-lg "
                />
              ) : null}
              <input
                required
                type="file"
                onChange={handleFileUpload}
                className="max-w-xs border my-5 mx-2 p-2 rounded-lg  text-sm shadow-sm "
              />
            </div>
            <h1 className="mt-3">UC Price</h1>
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
                      required
                      label="UC"
                      type="number"
                      value={field.uc}
                      onChange={(e) =>
                        handleFields(index, "uc", e.target.value)
                      }
                    />
                    <Input
                      required
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
            <div>
              <Slider
                className="max-w-md"
                defaultValue={[1000, 5000]}
                formatOptions={{ style: "currency", currency: "BDT" }}
                label="Price Range"
                maxValue={10000}
                minValue={0}
                step={50}
                onChange={(value) => setPriceRange(value)}
              />
            </div>
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <Toaster position="top-center" reverseOrder={true} />
    </div>
  );
};

export default AddNewProducts;
