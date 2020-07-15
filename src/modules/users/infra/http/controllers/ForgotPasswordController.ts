import { Request, Response } from 'express';
import { container } from 'tsyringe';
import SentForgotPasswordEmailService from '@modules/users/services/SentForgotPasswordEmailService';

export default class ForgotPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const sentForgotPasswordEmailService = container.resolve(
      SentForgotPasswordEmailService,
    );

    await sentForgotPasswordEmailService.execute({ email });

    return response.status(204).json();
  }
}
