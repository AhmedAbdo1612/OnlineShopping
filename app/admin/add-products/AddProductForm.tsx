"use client";

import Heading from "@/app/components/Heading";
import CustomCheckBox from "@/app/components/Inputs/CustomCheckBox";
import Input from "@/app/components/Inputs/Inputs";
import TextArea from "@/app/components/Inputs/TextArea";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const AddProductForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      description: "",
      brand: "",
      category: "",
      inStock: false,
      images: [],
      price: "",
    },
  });
  return (
    <>
      <Heading title="Add a Product" center />
      <Input
        id="name"
        label="Name"
        disabled={loading}
        register={register}
        errors={errors}
        required
      />

      <Input
        id="price"
        label="Price"
        disabled={loading}
        register={register}
        errors={errors}
        required
        type="number"
      />

      <Input
        id="brand"
        label="Brand"
        disabled={loading}
        register={register}
        errors={errors}
        required
      />
      <TextArea
        id="description"
        label="Description"
        disabled={loading}
        register={register}
        errors={errors}
        required
      />
      <CustomCheckBox id="inStock" register={register} 
      label="This product is in stock "/>
      <div className="w-full font-medium">
        <div className="mb-2 font-semibold">Select a Category</div>
        <div className="grid grid-cols-2 md:grid-cols-3 
        max-h-[50vh] overflow-y-auto">

        </div>
      </div>
    </>
  );
};
export default AddProductForm;
