import { SpacerBlock } from "@/layouts/types";

import { cn } from "@/lib/utils";

interface AssignSpacing {
  [key: string]: string;
}

export default function SpacerBlock({ props }: { props: SpacerBlock }) {
  const assignSpacing: AssignSpacing = {
    small: "py-10",
    medium: "py-20",
    large: "py-32",
  };

  // TODO Add colour option in CMS for spacer
  return (
    <section
      className={cn("relative bg-offwhite", assignSpacing[props.spacer])}
    ></section>
  );
}
