import { Header } from "@/shared/header";
import { Project } from "@/shared/project";

export default async function Home({
  params,
}: {
  params: { project: string };
}) {
  return (
    <div>
      <Project slug={params.project} />
    </div>
  );
}
