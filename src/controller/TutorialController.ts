import { getRepository, Like } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Tutorial } from "../entity/Tutorial";

export class TutorialController {

    private tutorialRepository = getRepository(Tutorial);

    async all(request: Request, response: Response, next: NextFunction) {
        const searchQuery = request.query.term;
        if (searchQuery)
            return this.tutorialRepository.find({
                where: [
                    {
                        title: Like(`%${searchQuery}%`)
                    },
                    {
                        description: Like(`%${searchQuery}%`)
                    }
                ]
            });
        else
            return this.tutorialRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.tutorialRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.tutorialRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let tutorialToRemove = await this.tutorialRepository.findOne(request.params.id);
        await this.tutorialRepository.remove(tutorialToRemove);
    }

}