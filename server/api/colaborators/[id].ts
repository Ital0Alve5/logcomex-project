import colaborators from "~/content/colaborators.json";

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id;

  return colaborators.find((colaborator) => colaborator.id.toString() === id);
});
