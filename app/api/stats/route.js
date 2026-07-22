import stats from "../../../data/stats";

export async function GET() {
  return Response.json(stats);
}