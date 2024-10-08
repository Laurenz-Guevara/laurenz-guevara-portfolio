import { UnderConstructionBlock } from "@/layouts/types";

export default function UnderConstructionBlock({
  props,
}: {
  props: UnderConstructionBlock;
}) {
  return (
    <div className="bg-secondary">
      <div className="page-container flex h-screen items-center justify-center text-center">
        <h2 className="text-2xl font-light text-white md:text-4xl">
          {props.underConstruction}
        </h2>
      </div>
    </div>
  );
}
