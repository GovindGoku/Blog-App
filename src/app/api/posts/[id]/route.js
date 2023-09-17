import { NextResponse } from "next/server";
import connect from "@/utils/db";
import PostData from "@/models/PostData";

export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    const post = await PostData.findById(id);

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};



export const DELETE = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    await PostData.findByIdAndDelete(id);

    return new NextResponse("Post has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

