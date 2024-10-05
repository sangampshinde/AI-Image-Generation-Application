import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { preview } from "../assets";
import { getRandomPrompt } from "../utils";
import { Loader, FormField } from "../components";

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {

  };

  const handleChange = (e) => {

  };

  const handleSuprizeMe= (e) => {
    
  };

  return (
    <>
      <section className="max-w-7xl mx-auto">
        <div>
          <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
          <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px]">
            Generate an imaginative image through DALL-E AI and share it with
            the community
          </p>
        </div>
        <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5">
            <FormField
              labelName="Your Name"
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              handleChange={handleChange}
            />
            <FormField
              labelName="Prompt"
              type="text"
              name="prompt"
              placeholder="an astronaut lounging in a tropical resort in space, vaporwave"
              value={form.prompt}
              handleChange={handleChange}
              isSuprizeMe
              handleSuprizeMe={handleSuprizeMe}
            />
          </div>
        </form>
      </section>
    </>
  );
};
export default CreatePost;
