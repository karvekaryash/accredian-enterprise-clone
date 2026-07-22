import programs from "../../../data/programs";

export async function GET() {
  return Response.json(programs);
}