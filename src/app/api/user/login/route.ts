//import jwt from "jsonwebtoken";

import { readDB } from "@lib/DB";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  readDB();
  request;
  // return NextResponse.json(
  //   {
  //     ok: false,
  //     message: "Username or Password is incorrect",
  //   },
  //   { status: 400 }
  // );

  const token = "Replace this with token creation";

  return NextResponse.json({ ok: true, token });
};
