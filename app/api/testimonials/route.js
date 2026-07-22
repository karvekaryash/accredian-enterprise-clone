import testimonials from "../../../data/testimonials";

export async function GET() {
  return Response.json(testimonials);
}