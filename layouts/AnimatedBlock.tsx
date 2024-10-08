import { AnimatedBlock } from "@/layouts/types";

export default function AnimatedBlock({ props }: { props: AnimatedBlock }) {
  return (
    <div className="bg-secondary">
      <div className="page-container">
        {props.animated.map((item) => (
          <div className="h-screen py-5" key={item.id}>
            <p className="text-xl text-offwhite md:text-4xl">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
