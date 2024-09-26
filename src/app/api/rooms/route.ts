import {  readDB, writeDB, originalDB } from "@lib/DB";

import { checkToken } from "@lib/checkToken";
import { nanoid } from "nanoid";
import { NextRequest, NextResponse } from "next/server";



export const GET = async () => {
   readDB();
  originalDB.rooms
  return NextResponse.json({
    ok: true,
    rooms: originalDB.rooms,
    totalRooms: originalDB.rnum
  });
};

export const POST = async (request: NextRequest) => {
  

  // return NextResponse.json(
  //   {
  //     ok: false,
  //     message: "Invalid token",
  //   },
  //   { status: 401 }
  // );

  readDB();

  // return NextResponse.json(
  //   {
  //     ok: false,
  //     message: `Room ${"replace this with room name"} already exists`,
  //   },
  //   { status: 400 }
  // );

  

  //call writeDB after modifying Database
  writeDB();

  return NextResponse.json({
    ok: true,
    //roomId,
    message: `Room ${"replace this with room name"} has been created`,
  });
};
