import { createFileRoute } from "@tanstack/react-router";
import AddEvents from "../components/AddEvents";

export const Route = createFileRoute("/add-event")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <AddEvents />
    </div>
  );
}
