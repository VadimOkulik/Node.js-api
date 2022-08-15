import {BaseController} from "../common/base.controller";
import {LoggerService} from "../logger/logger.service";
import { NextFunction, Response, Request } from "express";

export class UserController extends BaseController {
    constructor(logger: LoggerService) {
        super(logger);
        this.bindRoutes([
            {path: '/register', method: 'post', func: this.register},
            {path: '/login', method: 'post', func: this.login},
        ])
    }
    login(res: Response, req: Request, next: NextFunction) {
        this.ok(res, 'login');
    }
    register(res: Response, req: Request, next: NextFunction) {
        this.ok(res, 'register');
    }
}