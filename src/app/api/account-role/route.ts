import { NextRequest, NextResponse } from "next/server";
import { SellerUser } from "../../../../models/sellerUser";
import mongoose from "mongoose";
import { headers } from "next/headers";
const jwt = require("jsonwebtoken");

const URI: any = process.env.MONGOOSE_URI;
const key = process.env.JWT_KEY;

export async function POST(req: NextRequest) {
  try {
    await mongoose.connect(URI);
    const headersList = headers();
    const auth = headersList.get("authorization");
    if (auth && auth.startsWith("Bearer")) {
      const token = auth.substring(7);
      const parsedData = await req.json();
      const { id } = parsedData;
      try {
        const tokenValue = await jwt.verify(token, key);
        if (tokenValue.data.role === "admin") {
          try {
            const response: any = await SellerUser.find({ _id: id });
            if (response.length === 1) {
              switch (response[0].role) {
                case "co-admin":
                  const toggleStateToActivate = await SellerUser.updateOne(
                    { _id: id },
                    { role: "user" }
                  );

                  if (toggleStateToActivate.matchedCount === 1) {
                    return NextResponse.json(
                      {
                        message: "Role changed",
                        success: true,
                      },
                      { status: 200 }
                    );
                  } else {
                    return NextResponse.json(
                      {
                        message: "Role not changed",
                        success: false,
                      },
                      { status: 200 }
                    );
                  }
                case "user":
                  const toggleStateToInActivate = await SellerUser.updateOne(
                    { _id: id },
                    { role: "co-admin" }
                  );

                  if (toggleStateToInActivate.matchedCount === 1) {
                    return NextResponse.json(
                      {
                        message: "Role changed",
                        success: true,
                      },
                      { status: 200 }
                    );
                  } else {
                    return NextResponse.json(
                      {
                        message: "Role not changed",
                        success: false,
                      },
                      { status: 200 }
                    );
                  }

                default:
                  return NextResponse.json(
                    {
                      message: "Role not found please check the data",
                      success: false,
                    },
                    { status: 404 }
                  );
              }
            }
            return NextResponse.json(
              {
                message: "user not found",
                success: false,
                data: response,
              },
              { status: 200 }
            );
          } catch (err) {
            console.log(err);
            return NextResponse.json(
              { message: "user not found", success: false },
              { status: 404 }
            );
          }
        } else {
          return NextResponse.json(
            { message: "permission denied", success: false },
            { status: 200 }
          );
        }
      } catch (err) {
        return NextResponse.json(
          { message: "unauthorized user", success: false },
          { status: 401 }
        );
      }
    } else {
      return NextResponse.json(
        { message: "unauthorized user", success: false },
        { status: 401 }
      );
    }
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      { message: "Internal server error", success: false },
      { status: 500 }
    );
  }
}
