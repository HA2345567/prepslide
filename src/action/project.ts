'use server';

import { client } from "@/lib/prisma";
import { onAuththenticateUser } from "./user";

export const getAllProjects = async () => {
  try {
    const checkUser = await onAuththenticateUser();

    if (!checkUser || checkUser.status !== 200 || !checkUser.user) {
      return { status: 403, message: "User not Authenticated!" };
    }

    const projects = await client.project.findMany({
      where: {
        userId: checkUser.user.id,
        isDeleted: false, // fixed typo
      },
      orderBy:{
        updatedAt: "desc"
      },
    });

    if(projects.length === 0){
        return { status: 404, message: "No projects found" };
    }



    return { status: 200, data: projects };
  } catch (error) {
    console.error("Error fetching projects:", error);
    return { status: 500, message: "Internal Server Error" };
  }
};
