import {Request, Response} from 'express';
import {Phone} from '../model/phone.model';
import {errorMessage} from '../../../lib/Helper';

export class PhoneController {

    private model = Phone

    /***
     * Get All Phone Number
     * @param req Express Request
     * @param res Express Response
     */
    async get(req: Request, res: Response) {
        try {
            const results = await this.model.find({} as any)
            res.json(results)
        } catch (err) {
            errorMessage(res, err)
        }
    }

    /***
     * Update Phone Number
     * @param req Express Request
     * @param res Express Response
     */
    async update(req: Request, res: Response) {
        const {phone} = req.params;
        const newPhoneNumber = req.body.phone;
        try {
            const isExist = await this.model.find({phone: newPhoneNumber})
            if (isExist.length > 0) {
                return errorMessage(res, 'Phone number is already exist!')
            }
            await this.model.findOneAndUpdate({phone}, {phone: newPhoneNumber})
            res.json({message: 'Update Successful!'})
        } catch (err) {
            errorMessage(res, err)
        }
    }


    /***
     * Add New Phone Number
     * @param req Express Request
     * @param res Express Response
     */
    async add(req: Request, res: Response) {
        const {phone} = req.body;
        try {
            const isExist = await this.model.find({phone})
            if (isExist.length > 0) {
                return errorMessage(res, 'Phone number is already exist!')
            }
            await this.model.create({phone})
            res.json({message: 'Successfully Created!'})
        } catch (err) {
            errorMessage(res, err)
        }
    }


    /***
     * Delete Phone Number
     * @param req Express Request
     * @param res Express Response
     */
    async delete(req: Request, res: Response) {
        const {phone} = req.params;
        try {
            await this.model.findOneAndDelete({phone})
            res.json({message: 'Deleted Successful!'})
        } catch (err) {
            errorMessage(res, err)
        }
    }
}
