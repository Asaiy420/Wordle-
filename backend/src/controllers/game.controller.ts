import { Request, Response } from "express";

export const getWord = async (req: Request, res: Response ): Promise<void> => {
    res.send("Hello World")
}