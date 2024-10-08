import { HeadingBlock } from "@/layouts/types";

export default function HeadingBlock({ props }: { props: HeadingBlock }) {
  return (
    <div className="bg-offwhite">
      <div className="page-container py-10 text-center">
        <h2 className="text-2xl font-light md:text-4xl">{props.heading}</h2>
        <p className="mx-auto max-w-md pt-2 text-lg">{props.subheading}</p>
      </div>
    </div>
  );
}
