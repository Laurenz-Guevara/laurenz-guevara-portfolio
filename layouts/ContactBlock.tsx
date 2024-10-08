import { ContactBlock } from "@/layouts/types";
import serialize from "@/lib/serialize";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import * as React from "react";

export default function SpacerBlock({ props }: { props: ContactBlock }) {
  type FormData = {
    name: string;
    company: string;
    email: string;
    message: string;
  };

  const schema = z.object({
    name: z.string().min(1).max(30),
    company: z.string().min(1).max(30),
    email: z.string().email().min(1).max(30),
    message: z.string().min(1).max(150),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const submitData = async (data: FormData) => {
    console.log("It worked", data);
    const dataToSend = Object.entries(data).map(([name, value]) => ({
      field: name,
      value,
    }));

    console.log("Data to send", dataToSend);

    const req = await fetch(
      `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/form-submissions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          form: "65c0367f3b5d4d5fc60a9cec",
          submissionData: dataToSend,
        }),
      },
    );

    const res = await req.json();
    console.log(res);
  };

  return (
    <section className="page-container bg-offwhite">
      <div className="flex w-full flex-wrap justify-between md:flex-nowrap">
        <div className="w-full text-xl">
          {props?.title}
          {props?.content?.map((section, index) => (
            <div
              className="text-primary [&>a]:text-grey [&>a]:underline"
              key={index}
            >
              {/* 01/02/2024 This type error is a problem for future me :) */}
              {/* @ts-ignore */}
              {serialize(section.children)}
            </div>
          ))}
        </div>
        <div className="w-full pt-10 md:py-0">
          <form
            className="[&>div>input]:text-xl [&>div>label]:text-xl [&>div]:py-1.5"
            onSubmit={handleSubmit(submitData)}
          >
            <div className="flex">
              <label className="whitespace-nowrap pr-2">Hi, I&apos;m</label>
              <input
                className="w-full truncate border-b border-grey bg-offwhite"
                placeholder="Name*"
                type="text"
                {...register("name")}
              />
            </div>
            <div className="flex">
              <label className="whitespace-nowrap pr-2">and I work with</label>
              <input
                className="w-full truncate border-b border-grey bg-offwhite"
                placeholder="Company*"
                type="text"
                {...register("company")}
              />
            </div>
            <div className="flex">
              <label className="whitespace-nowrap pr-2">
                You can contact me at
              </label>
              <input
                className="w-full border-b border-grey bg-offwhite"
                placeholder="Email*"
                type="text"
                {...register("email")}
              />
            </div>
            <div>
              <input
                className="w-full border-b border-grey bg-offwhite"
                placeholder="Message*"
                type="text"
                {...register("message")}
              />
            </div>
            <div className="flex justify-end">
              <button className="text-xl" type="submit">
                Send Message
              </button>
            </div>
            <div>
              {isSubmitSuccessful && (
                <div className="text-xl">
                  Thank you for your message. We will be in touch shortly.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
