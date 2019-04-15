import { Request, Response, NextFunction } from 'express';

abstract class BaseCtrl {

  abstract model: any;

  // Get all
  getAll = (req: Request, res: Response) => {
    this.model.findAll()
      .then((data: any) => res.status(200).json({ data }));
  };

  // Count all
  count = (req: Request, res: Response) => {
    this.model.count()
      .then((count: Number) => res.status(200).json({ count }));
  }

  // Create
  create = (req: Request, res: Response) => {
    this.model.create(req.body)
      .then((data: any) => res.status(201).json({ data }));
  };

  // Get by id
  get = (req: Request, res: Response) => {
    this.model.findByPk(req.params.id)
      .then((data: any) => res.status(200).json({ data }));
  };

  // Get by id
  verifyID = (req: Request, res: Response, next: NextFunction) => {
    this.model.findByPk(req.params.id)
      .then((data: any) => {
        if (data) next();
        else {
          return res.status(404).send({
            success: false,
            status: 404,
            error: {
              message: 'Data was not found',
            },
          });
        }
      });
  };

  // Update by id
  update = (req: Request, res: Response) => {
    this.model.findByPk(req.params.id)
      .then((data: any) => {
        return data
          .update(req.body)
          .then((data: any) => res.status(200).json({ data }));
      })
  };

  // Delete by id
  delete = (req: Request, res: Response) => {
    this.model.destroy((
      {
        where: {
          id: req.params.id
        }
      }))
      .then(() => res.status(200).send({
        message: 'Data deleted',
      }));
  };
}

export default BaseCtrl;
